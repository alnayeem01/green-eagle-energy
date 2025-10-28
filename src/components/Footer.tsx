'use client'

import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-white">Green Eagle Energy</h1>
                    <p className="text-gray-400">
                        Helping UK homeowners access government-funded energy efficiency upgrades for a warmer, greener home.
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-green-500 transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><FaInstagram /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/privacy-policy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
                        
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Email: <a href="mailto:info@greeneagle.com" className="hover:text-green-500 transition-colors">info@greeneagle.com</a></li>
                        <li>Phone: <a href="tel:+441234567890" className="hover:text-green-500 transition-colors">+44 123 456 7890</a></li>
                        <li>Address: 123 Green St, London, UK</li>
                    </ul>
                </div>


            </div>

            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
                <span>&copy; {new Date().getFullYear()} Green Eagle Energy. All rights reserved.</span>
                <span>•</span>
                <a href="https://www.alnayeem.com/" className="hover:text-green-500 transition-colors">Developed by AL Shahriar Nayeem</a>
            </div>
        </footer>
    )
}