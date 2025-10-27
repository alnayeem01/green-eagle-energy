'use client'

import React, { useState } from 'react'
import MyNavbar from '@/components/MyNavbar'
import Footer from '@/components/Footer'
import axios from 'axios'

const Page = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<{ [key: string]: any }>({})
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const nextStep = () => {
    // Step 1: Homeowner check
    if (step === 1 && formData.homeowner === 'No') {
      setError('Sorry, only homeowners or property owners can apply.')
      return
    }

    // Step 2: Boiler over 20 logic
    if (step === 2) {
      if (formData.boiler20 === 'Yes') {
        setStep(5) // skip boiler change & upload
        return
      } else if (formData.boiler20 === 'No') {
        setStep(3)
        return
      } else {
        setError('Please select Yes or No.')
        return
      }
    }

    // Step 3: Boiler changed since 2006
    if (step === 3) {
      if (formData.boilerChanged === 'Yes') {
        setStep(5) // skip boiler upload
        return
      } else if (formData.boilerChanged === 'No') {
        setStep(4)
        return
      } else {
        setError('Please select Yes or No.')
        return
      }
    }

    // Step 4: Boiler upload
    if (step === 4) {
      if (!formData.boilerImage || !formData.boilerMake || !formData.boilerModel) {
        setError('Please upload a picture and provide make/model of your boiler.')
        return
      }
    }

    // Step 7: Qualification check
    if (step === 7) {
      const qualifies =
        formData.benefits === 'Yes' ||
        formData.medication === 'Yes' ||
        formData.income === 'Yes'
      if (!qualifies) {
        setError('At least one of the three qualification conditions must be Yes.')
        return
      }
    }

    // Step 8: Address validation
    if (step === 8) {
      if (!formData.houseNumber || !formData.street || !formData.postcode) {
        setError('Please complete all address fields.')
        return
      }
    }

    setStep(step + 1)
  }

  const prevStep = () => {
    if (step === 5 && formData.boiler20 === 'Yes') {
      setStep(2)
      return
    }
    if (step === 5 && formData.boilerChanged === 'Yes') {
      setStep(3)
      return
    }
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    try {
      const payload = new FormData()
      Object.entries(formData).forEach(([k, v]) => {
        if (v instanceof File) {
          payload.append(k, v)
        } else if (v !== undefined && v !== null && v !== '') {
          payload.append(k, String(v))
        }
      })
      // https://formspree.io/f/mzzkdgjo

      const res = await axios.post('https://formspree.io/f/mzzkdgjo', payload, {
        headers: { 'Accept': 'application/json' },
      })

      if (res.status === 200) setSubmitted(true)
      else setError('Failed to submit. Please try again later.')
    } catch (e: any) {
      if (e.response) {
        console.log('Formspree error:', e.response.data)
        setError('Submission error: ' + JSON.stringify(e.response.data))
      } else {
        setError('Something went wrong. Try again.')
      }
    }
  }

  const inputBase =
    'w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition text-gray-800'
  const btnBase = 'px-6 py-3 rounded-xl font-semibold transition focus:outline-none'
  const btnNext = btnBase + ' bg-green-600 text-white hover:bg-green-700'
  const btnPrev = btnBase + ' bg-gray-200 text-gray-800 hover:bg-gray-300'

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Are you or anyone in the property the homeowner?
            </label>
            <select
              className={inputBase}
              value={formData.homeowner || ''}
              onChange={(e) => handleChange('homeowner', e.target.value)}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        )
      case 2:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Is your boiler over 20 years old?
            </label>
            <select
              className={inputBase}
              value={formData.boiler20 || ''}
              onChange={(e) => handleChange('boiler20', e.target.value)}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        )
      case 3:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Has it been changed since 2006?
            </label>
            <select
              className={inputBase}
              value={formData.boilerChanged || ''}
              onChange={(e) => handleChange('boilerChanged', e.target.value)}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        )
      case 4:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Please upload a picture of your boiler and provide make/model.
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleChange('boilerImage', e.target.files?.[0])
              }
              className={inputBase}
            />
            {formData.boilerImage && (
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={URL.createObjectURL(formData.boilerImage)}
                  alt="Preview"
                  className="h-20 w-20 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => handleChange('boilerImage', null)}
                  className="text-sm text-red-600 underline"
                >
                  Remove
                </button>
              </div>
            )}
            <input
              type="text"
              placeholder="Boiler make"
              className={`${inputBase} mt-3`}
              value={formData.boilerMake || ''}
              onChange={(e) => handleChange('boilerMake', e.target.value)}
            />
            <input
              type="text"
              placeholder="Boiler model"
              className={`${inputBase} mt-3`}
              value={formData.boilerModel || ''}
              onChange={(e) => handleChange('boilerModel', e.target.value)}
            />
          </>
        )
      case 5:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Does anyone qualify for any benefits in the property?
            </label>
            <select
              className={inputBase}
              value={formData.benefits || ''}
              onChange={(e) => handleChange('benefits', e.target.value)}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        )
      case 6:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Is there anyone on repeat medication in the property?
            </label>
            <select
              className={inputBase}
              value={formData.medication || ''}
              onChange={(e) => handleChange('medication', e.target.value)}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        )
      case 7:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Is the household income under £31,000 before tax?
            </label>
            <select
              className={inputBase}
              value={formData.income || ''}
              onChange={(e) => handleChange('income', e.target.value)}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </>
        )
      case 8:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              House Number
            </label>
            <input
              type="text"
              className={inputBase}
              value={formData.houseNumber || ''}
              onChange={(e) => handleChange('houseNumber', e.target.value)}
            />

            <label className="font-semibold text-gray-800 mb-2 mt-4 block">
              Street Name
            </label>
            <input
              type="text"
              className={inputBase}
              value={formData.street || ''}
              onChange={(e) => handleChange('street', e.target.value)}
            />

            <label className="font-semibold text-gray-800 mb-2 mt-4 block">
              Postcode
            </label>
            <input
              type="text"
              className={inputBase}
              value={formData.postcode || ''}
              onChange={(e) => handleChange('postcode', e.target.value)}
            />
          </>
        )
      case 9:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Full name (as written on benefits)
            </label>
            <input
              type="text"
              className={inputBase}
              value={formData.fullname || ''}
              onChange={(e) => handleChange('fullname', e.target.value)}
            />
          </>
        )
      case 10:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Date of birth
            </label>
            <input
              type="date"
              className={inputBase}
              value={formData.dob || ''}
              onChange={(e) => handleChange('dob', e.target.value)}
            />
          </>
        )
      case 11:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Which council are you under?
            </label>
            <input
              type="text"
              className={inputBase}
              value={formData.council || ''}
              onChange={(e) => handleChange('council', e.target.value)}
            />
          </>
        )
      case 12:
        return (
          <>
            <label className="font-semibold text-gray-800 mb-2 block">
              Upload utility bill (must be within 12 months)
            </label>
            <input
              type="file"
              onChange={(e) =>
                handleChange('utilityBill', e.target.files?.[0])
              }
              className={inputBase}
            />
          </>
        )
      default:
        return null
    }
  }

  if (submitted)
    return (
      <>
        <MyNavbar />
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-700">
              Your application has been received. Expect a response within
              24–48 hours.
            </p>
          </div>
        </section>
        <Footer />
      </>
    )

  const totalSteps = 12

  return (
    <>
      <MyNavbar />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 mt-16">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-200">
          {/* Progress */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div
              className="h-2 bg-green-600 rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          {/* Step Content */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Step {step} of {totalSteps}
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="mb-8">{renderStep()}</div>

          {/* Buttons */}
          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`${btnPrev} ${step === 1 ? 'opacity-50' : ''}`}
            >
              Previous
            </button>

            {step === totalSteps ? (
              <button onClick={handleSubmit} className={btnNext}>
                Submit
              </button>
            ) : (
              <button onClick={nextStep} className={btnNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page
