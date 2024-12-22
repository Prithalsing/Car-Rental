import { Calendar, MapPin } from 'lucide-react'
import React from 'react'

const Main = () => {
  return (
    <>
      <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 h-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <h1 className="text-5xl font-bold mb-6">Find Your Perfect Ride</h1>
        <p className="text-xl mb-8">Rent the car of your dreams with just a few clicks</p>
      </div>
    </div>
    </>
  )
}

export default Main