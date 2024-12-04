import React from "react";
import {Link, Route, Routes} from 'react-router-dom'
import Home from "../pages/headerPages/home";

import Service from "../pages/headerPages/Service";
import Features from "../pages/headerPages/Features";
import About from "../pages/headerPages/about";
import Login from "../pages/login-signup/form/Login";
import Signup from "../pages/login-signup/form/Signup";


const Header = () => {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                 Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="nav-link px-2 text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/service" className="nav-link px-2 text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                <Link to='/login' className=" text-white nav-link" >Login</Link>
              </button>
              
              <button type="button" className="btn btn-warning ">
                <Link to='/signup' className=" text-black nav-link">Sign-up</Link> 
              </button>
            </div>
          </div>
        </div>
      </header> 
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>   
        <Route path='/features' element={<Features/>}/>  
        <Route path='/about' element={<About/>}/> 
       <Route path="/login" element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>

        
      </Routes>
    </div>
    
  );
};

export default Header;
