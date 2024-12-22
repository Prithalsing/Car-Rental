import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'


const Carcard = ({car}) => {
  return (
    <>
        <Card backgroundImage={car.image} className="flex flex-col justify-between bg-cover max-w-sm text-white h-96">
          <CardHeader className='mb-auto'>
            <CardTitle >
              {car.make} {car.model} ({car.year})
            </CardTitle>
            <CardDescription className='text-gray-900'>{car.category}</CardDescription>
          </CardHeader>

            <CardContent className="text-white mb-4">
              <p>Daily Rate: ${car.rental_details.daily_rate.amount} {car.rental_details.daily_rate.currency}</p>
              <p>Features: {car.rental_details.features.join(", ")}</p>
            </CardContent>

          <CardFooter className="flex justify-center" >
            <Button className='bg-blue-700 px-32'>Book Now</Button>
          </CardFooter>

        </Card>
    </>
  )
}

export default Carcard