import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Update() {
    const data = useLoaderData()
    const hendleformUpdate = e => {
        e.preventDefault()
        const short = e.target
        const photo = short.photo.value
        const name = short.name.value
        const countryname = short.countryname.value
        const location = short.location.value
        const description = short.description.value
        const cost = short.cost.value
        const seasonality = short.seasonality.value
        const yearcost = short.yearcost.value
        const time = short.time.value
        const objdata = { photo, name, countryname, location, description, cost, seasonality, time, yearcost }
        console.log(objdata)
        fetch(`http://localhost:5000/sportdata/${data._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(objdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your data is updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(data)
            })


    }
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-2xl shadow-lg mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Update Tourist Spot</h2>
                <form onSubmit={hendleformUpdate} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input
                            defaultValue={data.photo}
                            name='photo'
                            type="text"
                            placeholder="https://example.com/image.jpg"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Tourist Spot Name</label>
                        <input
                            defaultValue={data.name}
                            name='name'
                            type="text"
                            placeholder="Eiffel Tower"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Country Name</label>
                        <input
                            defaultValue={data.countryname}
                            name='countryname'
                            type="text"
                            placeholder="France"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Location</label>
                        <input
                            defaultValue={data.location}
                            name='location'
                            type="text"
                            placeholder="Paris"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Short Description</label>
                        <textarea
                            defaultValue={data.description}
                            name='description'
                            placeholder="A famous landmark in Paris."
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                        ></textarea>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Average Cost</label>
                        <input
                            defaultValue={data.cost}
                            name='cost'
                            type="text"
                            placeholder="$200"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Seasonality</label>
                        <input
                            defaultValue={data.seasonality}
                            name='seasonality'
                            type="text"
                            placeholder="Summer"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Travel Time</label>
                        <input
                            defaultValue={data.time}
                            name='time'
                            type="text"
                            placeholder="7 days"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Total Visitors Per Year</label>
                        <input
                            defaultValue={data.yearcost}
                            name='yearcost'
                            type="text"
                            placeholder="10000"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                        >
                            Update Tourist Spot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
