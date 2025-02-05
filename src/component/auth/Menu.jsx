import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <div className="col-md-4">
                <ul className="menu bg-base-200  min-h-72 mt-4 w-80 p-4">
                    {/* Sidebar content here */}

                    <li>
                        <NavLink to={'/auth/profile'} className='fs-5 font-bold border'>Dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/auth/add-faculty'} className='fs-5 font-bold border mt-3'> Add Faculty</NavLink>
                    </li>

                    <li><NavLink to={'/auth/all-faculties'} className='fs-5 font-bold border mt-3'>All faculties</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
