import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Menu from './Menu'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Addfaculty() {
    const navigate = useNavigate()
    const [record, setRecord] = useState({
        name: "",
        email: "",
        city: "",
        qualification: "",
        subject: "",
        batch: ""
    })
    const handleChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/faculties`, record)
            //   console.log(res);
            if (res.data) {
                toast.success('Record Added SuccessFully !', { autoClose: "1000", position: 'top-center' })
                setTimeout(() => {
                    navigate('/auth/all-faculties')
                }, 1000);
            } 
            else {

            }

        } catch (error) {
            console.log(error);
        }



    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Menu></Menu>
                    </div>
                    <div className="col-md-8 mt-4">
                        <form onSubmit={handleSubmit} className='bg-light p-5 w-50'>
                            <h1 style={{ textAlign: "center", fontSize: "30px", marginBottom: "30px", color: "green", fontWeight: "bold" }}>Add Faculty </h1>

                            <div className="form-group">

                                <input type="text" name='name' value={record.name} onChange={handleChange} className='form-control' placeholder='Enter Name' />
                                {/* <div>
                                    <span className='text-red-700 font-bold'>{errors.name && errors.name}</span>
                                </div> */}
                            </div>

                            <div className="form-group mt-4">
                                <input type="email" name='email' value={record.email} onChange={handleChange} className='form-control' placeholder='Enter Email Id' />
                                {/* <div>
                                    <span className='text-red-700 font-bold'>{errors.email && errors.email}</span>
                                </div> */}
                            </div>

                            <div className="form-group mt-4">
                                <input type="text" name='city' value={record.city} onChange={handleChange} className='form-control' placeholder=' Enter City' />
                                {/* <div>
                                    <span className='text-red-700 font-bold'>{errors.email && errors.email}</span>
                                </div> */}
                            </div>

                            <div className="form-group mt-4">
                                <input type="text" name='qualification' value={record.qualification} onChange={handleChange} className='form-control' placeholder=' Enter Qualification' />
                                {/* <div>
                                    <span className='text-red-700 font-bold'>{errors.email && errors.email}</span>
                                </div> */}
                            </div>

                            <div className="form-group mt-4">
                                <input type="text" name='subject' value={record.subject} onChange={handleChange} className='form-control' placeholder='Enter Subject' />
                                {/* <div>
                                    <span className='text-red-700 font-bold'>{errors.email && errors.email}</span>
                                </div> */}
                            </div>

                            <div className="form-group mt-4">
                                <input type="text" name='batch' value={record.batch} onChange={handleChange} className='form-control' placeholder='Enter Batch Time' />
                                {/* <div>
                                    <span className='text-red-700 font-bold'>{errors.email && errors.email}</span>
                                </div> */}
                            </div>


                            <div className='mt-3'>
                                <button className='btn btn-success w-100'>ADD RECORD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
