import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Menu from './Menu'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Allfacuities() {

    const [dark, setDark] = useState('')

    const [search , setSearch] = useState('')


    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [qualification, setQualification] = useState('')
    const [subject, setSubject] = useState('')
    const [batch, setBatch] = useState('')


    const [records, setRecords] = useState([])
    async function getFacuties() {
        const res = await axios.get(`http://localhost:3000/faculties`)
        //   console.log(res.data);
        setRecords(res.data)

    } useEffect(() => {
        getFacuties();
    }, [])

    const handleDelet = async (id) => {
        // console.log(id);
        await axios.delete(`http://localhost:3000/faculties/${id}`)
        toast.success("Record Deleted SuccessFully !", { autoClose: '1000', position: "top-center" })
        getFacuties()
    }

    async function getId(_, id) {
        // console.log(id);
        const res = await axios.get(`http://localhost:3000/faculties/${id}`)
        // console.log(res.data);

        setId(res.data?.id)
        setName(res.data?.name)
        setEmail(res.data?.email)
        setCity(res.data?.city)
        setQualification(res.data?.qualification)
        setSubject(res.data?.subject)
        setBatch(res.data?.batch)
    }
    //  HANDLE UPDATE

    const handleUpdate = async () => {
        const res = await axios.put(`http://localhost:3000/faculties/${id}`, {
            name: name,
            email: email,
            city: city,
            qualification: qualification,
            subject: subject,
            batch: batch
        })
        toast.success('Record UpDate SuccessFully !', { autoClose: "1000", position: "top-center" })

        // setTimeout(() => {
        //     navigate("/auth/all-faculties")
        // }, 1000);
    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Menu></Menu>
                    </div>
                    <div className="col-md-8 mt-5">
                        <h1 className='font-bold fs-5'>All faculties</h1>
                        {/* {JSON.stringify (records,null,4)} */}

                        <div className="form-check form-switch mt-2 mb-3">
                            <input className="form-check-input" type="checkbox" role="switch" onClick={() => dark === "table-dark" ? setDark('') : setDark("table-dark")} id="flexSwitchCheckDefault" />
                            <label className="form-check-label font-bold " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>


                        <table className={`table table-bordered ${dark}`}>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Qulification</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Betch</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    records.map((records) =>
                                        <tr key={records.id}>
                                            <th scope="row">{records.name}</th>
                                            <td>{records.email}</td>
                                            <td>{records.city}</td>
                                            <td>{records.qualification}</td>
                                            <td>{records.subject}</td>
                                            <td>{records.batch}</td>
                                            <td>
                                                <button className="btn  btn-success btn-sm mx-2"
                                                    onClick={() => getId(

                                                        document.getElementById('my_modal_1').showModal(),
                                                        records.id)

                                                    }
                                                >
                                                    Update</button>

                                                <button onClick={() => {
                                                    if (window.confirm('Are You Sure To Deleted ?')) {
                                                        handleDelet(records.id)
                                                    }
                                                }} className='btn btn-info btn-sm'>Delet</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>




                    </div>
                </div>
            </div>

            {/* { MODAL } */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg fs-5  "> Update Faculity Info</h3>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="mt-3">
                        <form method="dialog ">
                            {/* if there is a button in form, it will close the modal */}
                            <div className="form-group">
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='form-cantrol w-100 bg-light border p-1' placeholder='Name' />
                            </div>

                            <div className="form-group">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='form-cantrol w-100 bg-light border p-1 mt-3' placeholder='Email' />
                            </div>

                            <div className="form-group">
                                <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className='form-cantrol w-100 bg-light border p-1 mt-3' placeholder='City' />
                            </div>

                            <div className="form-group">
                                <input type="text" onChange={(e) => setQualification(e.target.value)} value={qualification} className='form-cantrol w-100 bg-light border p-1 mt-3' placeholder='Qulification' />
                            </div>

                            <div className="form-group">
                                <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} className='form-cantrol w-100 bg-light border p-1 mt-3' placeholder='Subject' />
                            </div>

                            <div className="form-group">
                                <input type="text" onChange={(e) => setBatch(e.target.value)} value={batch} className='form-cantrol w-100 bg-light border p-1 mt-3' placeholder='Batch' />
                            </div>


                            <button className="btn btn-secondary  fs-5 mt-4 w-40" onClick={handleUpdate}>Update</button>
                            <button className="btn btn-success  fs-5 mx-3 mt-4 w-40">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </Layout>
    )
}
