'use client'

import Footer from '@/components/Footer'
import MyNavbar from '@/components/MyNavbar'
import React, { useState } from 'react'

const Page = () => {
  // Define all 10 questions dynamically
  const questions = [
    { id: 1, question: 'Are you or anyone in the property the homeowner?', type: 'select', options: ['Yes', 'No'] },
    { id: 2, question: 'Do you have an existing boiler?', type: 'select', options: ['Yes', 'No'] },
    { id: 3, question: 'Describe your current heating system.', type: 'textarea' },
    { id: 4, question: 'Upload a picture of your current boiler or heating system.', type: 'file' },
    { id: 5, question: 'Do you have loft or cavity insulation?', type: 'select', options: ['Yes', 'No'] },
    { id: 6, question: 'Are you interested in renewable energy options?', type: 'select', options: ['Yes', 'No'] },
    { id: 7, question: 'Number of bedrooms in your property?', type: 'text' },
    { id: 8, question: 'Preferred contact email?', type: 'text' },
    { id: 9, question: 'Preferred contact phone?', type: 'text' },
    { id: 10, question: 'Any additional comments?', type: 'textarea' },
  ]

  const totalSteps = questions.length
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<{ [key: number]: any }>({})
  const [error, setError] = useState('')

  const handleChange = (id: number, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
    switch (currentStep) {
      case 1:
        if(formData[1]==='No'){
          setError("")
        }

        
        break;
    
      default:
        break;
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const renderQuestion = (q: typeof questions[0]) => {
    switch (q.type) {
      case 'select':
        return (
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-semibold text-gray-700">{q.question}</label>
            <select
              value={formData[q.id] || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="w-44 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select</option>
              {q.options?.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )
      case 'textarea':
        return (
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-semibold text-gray-700">{q.question}</label>
            <textarea
              value={formData[q.id] || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="w-full h-32 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
            />
          </div>
        )
      case 'file':
        return (
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-semibold text-gray-700">{q.question}</label>
            <input
              type="file"
              onChange={(e) => handleChange(q.id, e.target.files?.[0])}
              className="w-full text-gray-800"
            />
          </div>
        )
      case 'text':
        return (
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-semibold text-gray-700">{q.question}</label>
            <input
              type="text"
              value={formData[q.id] || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        )
      default:
        return null
    }
  }

  const handleSubmit = () => {
    const submission = questions.map((q) => ({
      question: q.question,
      answer: formData[q.id] || 'No answer',
    }))
    console.log(submission)
    alert('Form submitted! Check console for output.')
    // Here you can send `submission` to email or API
  }

  return (
    <>
      <MyNavbar />
      <section className="bg-gray-800 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep > i ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div
              className="bg-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {/* Form Step Content */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Step {currentStep} of {totalSteps}
            </h2>
            {renderQuestion(questions[currentStep - 1])}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-400 transition disabled:opacity-50"
            >
              Previous
            </button>
            {currentStep === totalSteps ? (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 transition"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 transition"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
