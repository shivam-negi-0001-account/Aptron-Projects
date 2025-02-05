import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/Auth'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const [auth, setAuth] = useAuth()



    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const valid = isValidate()
        if (valid) {

            let res = await axios.get(`http://localhost:3000/users `, { email: email });
            // console.log(res); 
            let flag = 0

            for (let i = 0; i < res.data.length; i++) {

                if (res.data[i].email === email && res.data[i].password == password) {
                    flag = 0
                    localStorage.setItem("auth", JSON.stringify(res.data[i]))
                    setAuth((res.data[i]))
                }
                else {
                    flag = 1
                }

            }

            if (flag == 1) {
                toast.error('InValid  Credentials !', { autoClose: "1000", position: "top-center" })
            }

            else {
                toast.success('Login SuccessFull !', { autoClose: "1000", position: "top-center" })
                setTimeout(() => {
                    navigate("/auth/profile")

                }, 1000);
            }

        }
        else {
            toast.error('InValid  Form !', { autoClose: "1000", position: "top-center" })
        }
    }

    function isValidate() {
        let err = {}

        if (email === "") {
            err.email = 'Email is Required'
        }

        if (password === "") {
            err.password = 'Password is Required'
        }

        setErrors({ ...err })
        return Object.keys(err).length < 1;
    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                        <form onSubmit={handleSubmit} className='p-5 my-10  bg-light'>
                            <h1 style={{ textAlign: "center", fontSize: "30px", marginBottom: "30px", color: "green", fontWeight: "bold" }}>Login Form </h1>
                            <div className="form-group">
                                <label htmlFor="#">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                <div>
                                    <span className='text-red-700 fs-5 font-bold'>{errors.email && errors.email}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="#">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                                <div>
                                    <span className='text-red-700 fs-5 font-bold'>{errors.password && errors.password}</span>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <button className='btn btn-primary w-100'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </Layout>
    )
}
