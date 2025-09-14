import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Firebase/Firebase.config'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [userdata, setuserdata] = useState(null)
    const [loadding, setloadding] = useState(true)
    const provider = new GoogleAuthProvider

    const newcreateuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleuser = () => {
        return signInWithPopup(auth, provider)
    }


    const info = {
        userdata,
        loadding,
        newcreateuser,
        loginuser,
        googleuser,
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
