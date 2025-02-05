import React from 'react'
import Layout from '../../layout/Layout'
import { useAuth } from '../../context/Auth'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

export default function Profile() {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>
      <div className="container">
        <div className="row">

         <div className="col-md-4">
         <Menu></Menu>
         </div>

          <div className="col-md-8">
            {/* {JSON.stringify(auth, null, 4)} */}

            <h3 className='mb-2  font-bold'>Persnal Details</h3>
            <table class="table w-50 table-bordered">
              <thead>

              </thead>
              <tbody>
                <tr>
                  <th scope="row">Id</th>
                  <td>{auth?.id}</td>
                </tr>

                <tr>
                  <th scope="row">Name</th>
                  <td>{auth?.name}</td>
                </tr>

                <tr>
                  <th scope="row">Email</th>
                  <td>{auth?.email}</td>
                </tr>

                <tr>
                  <th scope="row">Mobile</th>
                  <td>{auth?.mobile}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

