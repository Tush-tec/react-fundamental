import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../login-signup/form/Login"
import Signup from "../login-signup/form/Signup";

function Home() {
  return (
    <div
      className="home-page"
      style={{ backgroundColor: "#808080", minHeight: "100vh" }}
    >
        <header className=" text-white py-5">
        <div className="container">
          <h1 className="text-center">Welcome to Our Platform!</h1>
        </div>
      </header>

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <img
              src="https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="..."
            />          </div>
          <div className="carousel-item">
          <img
              src="https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <img
              src="https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Header Section */}

      {/* Main Content (Centering using flexbox) */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }} // Ensures the content area takes most of the height
      >
        <div className="text-center bg-dark  rounded " style={{backgroundColor:"#d4d4d4", width:"500px", padding:"15px", height:"300px", position:"relative", top:"-700px"}}>
          <p className="text-white  mb-4 d-flex justify-content-center"  style={{position:"relative", top:"130px"}}  >
            We are excited to have you here. If you already have an account,
            please log in. If not, sign up and join our community today!
          </p>
          <div className="d-flex justify-content-center my-4">
            <Link to="/login" className="btn btn-primary mx-2">
              Login
            </Link>

            <Link to="/signup" className="btn btn-outline- mx-2 btn btn-warning  ">
              Sign Up
            </Link>
          </div>

          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/> 
          </Routes>

          

          {/* Carousel */}
        </div>
      </div>
    </div>
  );e
}

export default Home;
