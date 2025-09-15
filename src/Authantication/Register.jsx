import React, { useContext } from 'react'
import { AuthContext } from './Provider/AuthProvider'
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";
import auth from './Firebase/Firebase.config';
import { Link } from 'react-router-dom';

export default function Register() {
    const { userdata, newcreateuser, googleuser } = useContext(AuthContext)

    const heandleregisterform = e => {
        e.preventDefault()
        const shortdata = e.target
        const email = shortdata.email.value
        const password = shortdata.password.value
        const objdata = { email, password }
        console.log(objdata)

        newcreateuser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: '🎉 Congratulations! You have successfully registered and joined our travel community.',
                    icon: 'success',
                    confirmButtonText: 'Start Journey'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const googlehendle = () => {
        googleuser(auth)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: '🎉 Congratulations! You have successfully registered and joined our travel community.',
                    icon: 'success',
                    confirmButtonText: 'Start Journey'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            ✈️ Start your journey with us today! Register now to unlock exclusive travel deals, personalized tour packages, and the latest updates on amazing destinations. Join our travel community and make every trip unforgettable.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={heandleregisterform}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>

                                </fieldset>
                            </form>
                            <button onClick={googlehendle} className="btn btn-neutral mt-2"><FaGoogle /></button>
                            <p>Already have an account? <Link to='/login' className='text-blue-400 font-bold text-xl'>Log in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

