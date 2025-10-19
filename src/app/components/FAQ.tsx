'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQ() {
  const faqs = [
    {
      question: 'Who is eligible for ECO4 grants?',
      answer: 'Homeowners and private tenants in the UK with low-income households or vulnerable residents.',
    },
    {
      question: 'Is there any cost to me?',
      answer: 'All approved energy efficiency measures under ECO4 are fully funded — zero upfront cost.',
    },
    {
      question: 'How long does the process take?',
      answer: 'From eligibility check to installation, the process typically takes 4–8 weeks depending on your home and scheduling.',
    },
    {
      question: 'Can I choose which upgrades I get?',
      answer: 'The assessment identifies the most suitable measures; approved upgrades are tailored to your property’s needs.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Got Questions?<span className='text-green-600 m-3'>We Got Answers!</span> </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Answers to common questions about ECO4 grants and home energy upgrades.
        </p>
      </div>
      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-semibold text-black">{faq.question}</span>
              <FaChevronDown
                className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`px-6 pb-6 text-gray-700 text-base md:text-lg transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </section>
  )
}