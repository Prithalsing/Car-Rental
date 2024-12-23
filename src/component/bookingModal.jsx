import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const BookingModal = ({ car, isOpen, onClose }) => {

  const [selectedInsurance, setSelectedInsurance] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    alert('Booking successful! You will receive a confirmation email shortly.');
    onClose();
  };
  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-black'>Book {car.make} {car.model}</DialogTitle>
          <DialogDescription>
            Complete your booking details below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Insurance
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={selectedInsurance}
              onChange={(e) => setSelectedInsurance(e.target.value)}
              required
            >
              <option value="">Choose insurance type</option>
              {car.availability.insurance_options.map((option) => (
                <option key={option.type} value={option.type}>
                  {option.type} - ${option.daily_rate}/day ({option.coverage})
                </option>
              ))}
            </select>
          </div>
          <DialogFooter>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Confirm Booking
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    </>
  )
}

export default BookingModal