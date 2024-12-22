import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>CarRental</h3>
            <p className="text-gray-400">
              Making car rental easy and accessible for everyone.
            </p>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-4 '>Quick Links</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-400'>About Us</a></li>
              <li><a href="#" className='text-gray-400'>Cars</a></li>
              <li><a href="#" className='text-gray-400'>Terms & Condition</a></li>
              <li><a href="#" className='text-gray-400'>Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className='text-xl font-bold mb-4 '>Working hours</h5>
            <ul className='space-y-2'>
              <li className='text-gray-400'>Mon - Fri: 9:00 AM - 9:00 PM</li>
              <li className='text-gray-400'>Saturday: 9:00 AM - 7:00 PM</li>
              <li className='text-gray-400'>Sunday: 10:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className='space-y-2'>
              <li className='flex items-center text-gray-400'>
                <Phone className="w-5 h-5 mr-2"/>
                <span> +91 98256452</span>
              </li>
              <li className='flex items-center text-gray-400'>
                <Mail className="w-5 h-5 mr-2"/>
                <span>info@carrental.com</span>
              </li>
              <li className='flex items-center text-gray-400'>
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Rental Street, NY 10001</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DriveEase. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer