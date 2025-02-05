import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import Profile from './component/auth/Profile'
import Addfaculty from './component/auth/Addfaculty'
import Allfacuities from './component/auth/Allfacuities'
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/auth/register' element={<Register></Register>}></Route>
          <Route path='/auth/login' element={<Login></Login>}></Route>
          <Route path='/auth/profile' element={<Profile></Profile>}></Route>
          <Route path='/auth/add-faculty' element={<Addfaculty></Addfaculty>}></Route>
          <Route path='/auth/all-faculties' element={<Allfacuities></Allfacuities>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
