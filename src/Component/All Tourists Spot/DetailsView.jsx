import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Subdetail from './Subdetail'

export default function DetailsView() {
    const dataload = useLoaderData()

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={dataload.photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{dataload.name}</h3>
                            <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                            <p>{dataload.description}</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    )
}
