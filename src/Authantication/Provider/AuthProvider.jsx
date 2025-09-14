import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Firebase/Firebase.config'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [userdata, setuserdata] = useState(null)
    const [loadding, setloadding] = useState(true)

    const newcreateuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const info = {
        userdata,
        loadding,
        newcreateuser,
        loginuser
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
