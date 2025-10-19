'use client'

import React from 'react'

export default function HowItWorks() {
    const steps = [
        {
            title: 'Check Your Eligibility',
            description: 'Answer a few quick questions and see instantly if your home qualifies for a <span className="text-green-600 font-semibold">government-funded energy upgrade</span>.',
        },
        {
            title: 'Home Energy Assessment',
            description: 'Our experts evaluate your property, pinpoint savings opportunities, and recommend upgrades like <span className="text-green-600 font-semibold">insulation, boilers, or renewable solutions</span>.',
        },
        {
            title: 'Enjoy Your Upgraded Home',
            description: 'Certified installers carry out the improvements, leaving your home warmer, <span className="text-green-600 font-semibold">energy-efficient</span>, and cost-saving — fully funded if eligible.',
        },
    ]

    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
                <p className="text-gray-700 text-lg md:text-xl">
                    A simple, 3-step process to make your home warmer and more energy-efficient.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Optional connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 z-0"></div>

                {steps.map((step, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center relative z-10 transition-transform hover:-translate-y-2 hover:shadow-xl hover:border-green-600 hover:border duration-300">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                            {index + 1}
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">{step.title}</h3>
                        <p className="text-gray-700 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center my-10'>
                <button
                    onClick={() => {
                    }}
                    className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-green-700 transition-all text-lg md:text-xl"
                >Let’s Get Started</button>
            </div>
        </section>
    )
}