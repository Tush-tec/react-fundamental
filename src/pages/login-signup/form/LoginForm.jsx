import React, { useState } from "react";

function LoginForm({ onLoginSuccess }) {  // Accepts a prop to handle successful login

    const [userName , setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const admin_userName = "mumbai";
        const admin_password = "delhi@123";

        if (userName === admin_userName && password === admin_password) {
            onLoginSuccess(); 
            setError('');
        } else {
            setError('Username or password are incorrect');
        }
    }

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#ffffff" }}>
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <div className="row w-100 mx-0" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                    <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
                        <div className="card border-0 shadow-lg" style={{ borderRadius: "10px", width: "100%", maxWidth: "400px" }}>
                            <div className="card-body p-4">
                                <h2 className="mb-4 text-center">Login to Your Account</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="form-label">UserName</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="userName"
                                            placeholder="Enter your UserName"
                                            onChange={(e) => setUserName(e.target.value)}
                                            style={{ borderRadius: "8px" }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            style={{ borderRadius: "8px" }}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="rememberMe" style={{ borderRadius: "50%" }} />
                                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                        </div>
                                        <a href="#" className="text-muted">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: "rgb(33, 37, 41)", color: "#ffffff", borderRadius: "8px", padding: "10px" }}>Login</button>
                                </form>
                            </div>
                            <div className="text-danger text-center">{error}</div>
                            <div className="text-center mt-4">
                                <p>Don't have an account? <a href="#">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
