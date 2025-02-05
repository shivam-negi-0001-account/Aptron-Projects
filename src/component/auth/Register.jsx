import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(user);
        const valid = isValidate()
        // console.log(isValidate);
        // console.log(errors);
        if (valid) {
            console.log(user);
            // setUser({ name: "", email: "", password: "", mobile: "" })
            // http://localhost:3000/users
            const res = await axios.post(` http://localhost:3000/users `, {
                name: user.name,
                email: user.email,
                password: user.password,
                mobile: user.mobile
            })
            // console.log(res);
            toast.success("Register SuccessFully !", { autoClose: "1000", position: "top-center" })
            setUser({ name: "", email: "", password: "", mobile: "" })
            setTimeout(() => {
                navigate('/auth/login')
            }, 1000);

        } else {
            toast.error("InValid Form !!", { autoClose: "1000", position: "top-center" })


        }


    }

    function isValidate() {
        const error = {};

        if (user.name === "") {
            error.name = 'Nmae is Required'
        }

        if (user.email === "") {
            error.email = 'Email is Required'
        }

        if (user.password === "") {
            error.password = 'Password is Required'
        }

        if (user.name === "") {
            error.mobile = 'Mobile Number is Required'
        }
        setErrors({ ...error })
        return Object.keys(error).length < 1

    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-3">

                        <form onSubmit={handleSubmit} className='bg-light p-5'>
                            <h1 style={{ textAlign: "center", fontSize: "30px", marginBottom: "30px", color: "green", fontWeight: "bold" }}>Register Form </h1>

                            <div className="form-group">
                                <label htmlFor="#" className='form-label'>Name</label>
                                <input type="text" name="name" value={user.name} onChange={handleChange} className='form-control' />
                                <div>
                                    <span className='text-red-700 font-bold'>{errors.name && errors.name}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="#" className='form-label'>Email</label>
                                <input type="email" name="email" value={user.email} onChange={handleChange} className='form-control' />
                                <div>
                                    <span className='text-red-700 font-bold'>{errors.email && errors.email}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="#" className='form-label'>Password</label>
                                <input type="password" name="password" value={user.password} onChange={handleChange} className='form-control' />
                                <div>
                                    <span className='text-red-700 font-bold'>{errors.password && errors.password}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="#" className='form-label'>Mobile</label>
                                <input type="text" name="mobile" value={user.mobile} onChange={handleChange} className='form-control' />
                                <div>
                                    <span className='text-red-700 font-bold'>{errors.mobile && errors.mobile}</span>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <button className='btn btn-primary w-100'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
