import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
//import { Counter } from './features/counter/Counter';
import Home from './pages/home/Home'
import Catalogue from './pages/catalogue/Catalogue'
import ContactForm from './pages/contactForm/ContactForm'
import Cart from './pages/cart/Cart'
import Detail from './pages/detail/Detail'
import About from './pages/about/About'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Create from './pages/create/Create'
import UserAccount from './pages/userAccount/UserAccount'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/catalogue" element={<Catalogue />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/user/account" element={<UserAccount/>} /> 
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
