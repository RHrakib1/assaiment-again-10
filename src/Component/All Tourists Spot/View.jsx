import React from 'react'
import { Link } from 'react-router-dom'

export default function View({ data }) {
    const { _id, photo, name, countryname, location, time, yearcost, seasonality, cost, description } = data
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={photo} alt="nai" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-1.5">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <div className='flex  justify-between'>
                            <p className="dark:text-gray-800"><span className='font-semibold text-sm'>Travel Time:</span> {time}</p>
                            <p className="dark:text-gray-800"><span className='font-semibold text-sm'>Average Cost:</span> {cost}</p>
                        </div>
                        <div className='flex  justify-between'>
                            <p className="dark:text-gray-800"><span className='font-semibold text-sm'>Location:</span> {location}</p>
                            <p className="dark:text-gray-800"><span className='font-semibold text-sm'>Season:</span> {seasonality}</p>
                        </div>
                    </div>

                    <Link to={`/detailsview/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
