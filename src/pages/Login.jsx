import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

/**
 * Login Page Component
 * Simple login form for user authentication
 * Uses local state for demonstration purposes
 */
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real app, this would connect to a backend
        console.log('Login attempt:', formData)
        alert('Login functionality would be implemented here!')
    }

    return (
        <div className="login-page">
            <Navbar />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow">
                            <div className="card-body p-4">
                                <h2 className="card-title text-center mb-4">Login</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-success">
                                            Login
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center mt-3">
                                    <p className="mb-0">
                                        Don't have an account?
                                        <Link to="/signup" className="text-decoration-none ms-1">
                                            Sign up here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
