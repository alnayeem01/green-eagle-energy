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
      title: 'Central Heating',
      description: 'Enjoy a warmer, more efficient home with modern central heating systems designed to cut costs and keep comfort consistent year-round',
      image: '/heating.jpg',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 border-gray-200 border-b px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Green Eagle Energy helps eligible UK homeowners access fully funded energy-saving measures under the ECO4 scheme.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg bg-white transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12">
        <CTAButton text="See if I am eligible" />
      </div>
    </section>
  )
}
