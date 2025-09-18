import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { supportedLanguages } from '../i18n/index.js'

/**
 * Navbar Component
 * Navigation bar with brand, links, and authentication buttons
 * Shows different buttons based on login state
 */
function Navbar() {
    const { t, i18n } = useTranslation()
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
                    {t('brand')}
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
                            <Link className="nav-link" to="/">{t('nav.home')}</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">{t('nav.features')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">{t('nav.contact')}</a>
                        </li>
                    </ul>

                    <div className="row g-2 align-items-center flex-nowrap">
                        {/* Language Switcher */}
                        <div className="col-auto">
                            <select
                                className="form-select bg-success-subtle border-success"
                                value={i18n.language}
                                onChange={(e) => i18n.changeLanguage(e.target.value)}
                            >
                                {Object.entries(supportedLanguages).map(([code, label]) => (
                                    <option key={code} value={code}>{label}</option>
                                ))}
                                <option value="pa" disabled>Punjabi (ਪੰਜਾਬੀ)</option>
                                <option value="ta" disabled>Tamil (தமிழ்)</option>
                            </select>
                        </div>
                        {/* Authentication buttons */}
                        {isLoggedIn ? (
                            <div className="col-auto">
                                <button
                                    className="btn btn-outline-success w-100"
                                    onClick={handleLogout}
                                >
                                    {t('nav.logout')}
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="col-auto">
                                    <Link
                                        className="btn btn-outline-success w-100"
                                        to="/login"
                                    >
                                        {t('nav.login')}
                                    </Link>
                                </div>
                                <div className="col-auto">
                                    <Link
                                        className="btn btn-success w-100"
                                        to="/signup"
                                    >
                                        {t('nav.signup')}
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar