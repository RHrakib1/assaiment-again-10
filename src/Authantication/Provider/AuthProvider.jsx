import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Firebase/Firebase.config'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setuser] = useState(null)
    const [loadding, setloadding] = useState(null)

    const newcreateuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const info = {
        user,
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
