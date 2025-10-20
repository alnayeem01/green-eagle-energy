'use client'

import React from 'react'
import CTAButton from './UI/CTAButton'

export default function Services() {
    const services = [
        {
            title: 'Boiler & Heating Upgrades',
            description: 'Replace old or inefficient boilers, install low-carbon heating systems, and improve thermostat controls for better efficiency.',
            image: '/boiler.jpg',
        },
        {
            title: 'Insulation',
            description: 'Loft, cavity, and solid wall insulation, as well as underfloor insulation to reduce heat loss.',
            image: '/insulation.jpg',
        },
        {
            title: 'Draft Proofing & Efficiency',
            description: 'Draught-proof doors and windows, pipe insulation, and hot water cylinder jackets.',
            image: '/images/draft-proofing.png',
        },
        {
            title: 'Optional Renewable Measures',
            description: 'Solar thermal panels and other low-carbon technologies depending on eligibility.',
            image: '/images/solar.png',
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Big Image */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                        />

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                            <p className="text-gray-200 mt-2 text-sm md:text-base">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center my-10'>
                <CTAButton text={"See if I am eligible"} />
            </div>
        </section>
    )
}