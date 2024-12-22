import React, { useEffect, useState } from 'react'
import Carcard from './carcard'
import SearchBar from './search'

const Carlist = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const [rentcar, setrentcar] = useState([])

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const response = await fetch('/carlist.json');
        if (!response.ok) {
          throw new Error('Failed to fetch car');
        }
        const data = await response.json();
        setrentcar(data.rental_cars);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchAllCars();
  }, []);

  const filteredCars = rentcar.filter((car) => {
    if (!car) return false
    const searchLower = searchTerm.toLowerCase()
    return (
      (car.type?.toLowerCase()?.includes(searchLower) ?? false) ||
      (car.make?.toLowerCase()?.includes(searchLower) ?? false) ||
      (car.model?.toLowerCase()?.includes(searchLower) ?? false)
    )
  })

  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <SearchBar searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Cars</h2>
            {
              filteredCars.length ===0 ?(
                <p className="text-center text-gray-500">No car found matching your search.</p>
              ): (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {filteredCars.map((car)=>(
                    <Carcard key={car.id} car={car} />
                  ))}
                </div>
              )
            }
            
        </div>
      </div>
    </>
  )
}

export default  Carlist