import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = ({searchTerm, setsearchTerm}) => {
  return (
    <>
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          className=" text-black w-full pl-10 pr-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-600" />
      </div>
    </>
   
  )
}

export default SearchBar