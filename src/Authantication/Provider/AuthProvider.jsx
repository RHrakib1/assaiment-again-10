import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [userdata, setuserdata] = useState(null)
    const [loadding, setloadding] = useState(true)
    const provider = new GoogleAuthProvider()

    const newcreateuser = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleuser = () => {
        setloadding(true)
        return signInWithPopup(auth, provider)
    }

    const userlogout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentuser) => {
            setuserdata(currentuser)
            setloadding(false)
        })
        return () => unsubscrib()
    },[])


    const info = {
        userdata,
        loadding,
        newcreateuser,
        loginuser,
        googleuser,
        userlogout
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
