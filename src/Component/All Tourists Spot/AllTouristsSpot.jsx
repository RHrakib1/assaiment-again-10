import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import View from './View'

export default function AllTouristsSpot() {
    const loaderdata = useLoaderData()
    const [extrauser, setextrauser] = useState(loaderdata)

    return (
        <div>
            <h2>AllTouristsSpot: {loaderdata.length}</h2>
            <div className='grid grid-cols-4'>
                {
                    extrauser.map(data => <View data={data}></View>)
                }
            </div>
        </div>
    )
}
