import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Navbar Component
 * Navigation bar with brand, links, and authentication buttons
 * Shows different buttons based on login state
 */
function Navbar() {
    // Simple authentication state (in a real app, this would come from context/state management)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Handle logout functionality
    const handleLogout = () => {
        setIsLoggedIn(false)
        alert('Logged out successfully!')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success-subtle">
            <div className="container">
                {/* Brand/Logo */}
                <Link className="navbar-brand fs-3 fw-bold text-success" to="/">
                    FarmConnect
                </Link>

                {/* Mobile menu toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* Authentication buttons */}
                    <div className="d-flex">
                        {isLoggedIn ? (
                            <button
                                className="btn btn-outline-success"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link className="btn btn-outline-success me-2" to="/login">
                                    Login
                                </Link>
                                <Link className="btn btn-success" to="/signup">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar