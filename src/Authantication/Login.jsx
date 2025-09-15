import React, { useContext } from 'react'
import { AuthContext } from './Provider/AuthProvider'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Login() {
    const { userdata, loginuser } = useContext(AuthContext)
    const hendleformlogin = e => {
        e.preventDefault()
        const shortdata = e.target
        const email = shortdata.email.value
        const password = shortdata.password.value
        const objdata = { email, password }
        console.log(objdata)

        loginuser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: '🌍 You have successfully logged in. Let’s continue your travel adventure with us.',
                    icon: 'success',
                    confirmButtonText: 'Let’s Go!'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Incorrect email or password. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={hendleformlogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <p>Don’t have an account? <Link to='/register' className='text-blue-400 font-bold text-xl'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
