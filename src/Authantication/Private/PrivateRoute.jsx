import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    const { userdata, loadding } = useContext(AuthContext)

    if (loadding) {
        return <span className="loading loading-spinner text-error"></span>
    }
    return userdata ? children : <Navigate to='/login'></Navigate>
}
