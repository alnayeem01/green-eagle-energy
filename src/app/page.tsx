'use client'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import MyNavbar from '@/components/MyNavbar'
import Services from '@/components/Services'
import CTAButton from '@/components/UI/CTAButton'
import React from 'react'


const page = () => {
  return (
    <>
      <MyNavbar />
      <section
        id="hero"
        className="relative bg-gray-900  h-screen flex items-center justify-center px-6"
      >
        {/* Background overlay / optional image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-bg.jpg"
            alt="Energy efficient home"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-3xl mt-5 text-center z-10">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-extrabold text-white mb-6 leading-snug tracking-tight">
            Transform Your Home’s Efficiency <br />with the <span className="text-green-500">ECO4 Grant</span>
          </h1>

          <p className="text-gray-200 text-lg  lg:text-2xl mb-10 leading-relaxed">
            Install a brand-new boiler, insulation, or renewable measures at{' '}
            <span className="font-semibold text-green-500">no cost</span>. Lower your bills, save energy,
            and make your home greener — fully funded by the UK ECO4 Scheme.
          </p>

          <CTAButton text={"Check Eligibility "} />
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
