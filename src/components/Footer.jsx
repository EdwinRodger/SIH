import React from 'react'

/**
 * Footer Component
 * Simple footer with placeholder text and basic information
 * Uses Bootstrap grid system for responsive layout
 */
function Footer() {
    return (
        <footer className="bg-success-subtle text-dark py-5 border-top">
            <div className="container">
                <div className="row">
                    {/* Company information */}
                    <div className="col-lg-4 mb-4">
                        <h5 className="text-success mb-3">FarmConnect</h5>
                        <p className="text-muted">
                            Revolutionizing agriculture through smart technology and
                            connecting farmers for a sustainable future.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-success mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#hero" className="text-muted text-decoration-none">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#features" className="text-muted text-decoration-none">Features</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="text-muted text-decoration-none">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-success mb-3">Support</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none">Help Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none">Documentation</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className="col-lg-4 mb-4">
                        <h6 className="text-success mb-3">Contact Info</h6>
                        <div className="text-muted">
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                SDSF, DAVV
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-phone me-2"></i>
                                +91 1234567890
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-envelope me-2"></i>
                                farmconnect@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <hr className="my-4" />
                <div className="row align-items-center">
                    <p className="text-muted mb-0">
                        Built with ❤️ for Smart India Hackathon
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
