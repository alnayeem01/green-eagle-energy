'use client'
import React from 'react'
import MyNavbar from './components/MyNavbar'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <MyNavbar />
      <section id='hero' >
        <div className="max-w-3xl px-15  z-10">
          <h1 className="text-4xl pt-30 md:text-5xl font-extrabold text-white mb-4 leading-snug">
            Upgrade Your Home’s Efficiency with the ECO4 Government Grant
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Get a brand-new boiler or insulation installed at <span className="font-semibold text-green-600">no cost</span>.
            Save energy, lower your bills, and make your home greener — all funded under the UK ECO4 Scheme.
          </p>
          <button
            onClick={() => {
            }}
            className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-green-700 transition-all text-lg md:text-xl"
          >
            Check Your Eligibility
          </button>
        </div>
      </section>

      <Services />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  )
}

export default page
