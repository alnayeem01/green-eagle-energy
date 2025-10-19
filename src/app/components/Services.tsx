'use client'

import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Services() {
    const services = [
        {
            title: 'Boiler & Heating Upgrades',
            description: 'Replace old or inefficient boilers, install low-carbon heating systems, and improve thermostat controls for better efficiency.',
        },
        {
            title: 'Insulation',
            description: 'Loft, cavity, and solid wall insulation, as well as underfloor insulation to reduce heat loss.',
        },
        {
            title: 'Draft Proofing & Efficiency',
            description: 'Draught-proof doors and windows, pipe insulation, and hot water cylinder jackets.',
        },
        {
            title: 'Optional Renewable Measures',
            description: 'Solar thermal panels and other low-carbon technologies depending on eligibility.',
        },
    ]

    return (
        <section className="bg-gray-50 py-16 border-gray-300 border-b px-6">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
                <p className="text-gray-700 text-lg md:text-xl">
                    Green Eagle Energy helps eligible UK homeowners access fully funded energy-saving measures under the ECO4 scheme.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-white hover:bg-blue-50 rounded-2xl shadow-md p-6 flex items-start space-x-4 transition-transform hover:-translate-y-1 hover:shadow-xl">
                        <FaCheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center my-10'>
                <button
                onClick={() => {
                }}
                className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-green-700 transition-all text-lg md:text-xl"
            >See if i am eligible</button>
            </div>
        </section>
    )
}