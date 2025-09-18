import React from 'react'

/**
 * Hero Component
 * Main banner section with title, subtitle, and placeholder image
 * Uses Bootstrap responsive image and grid system
 */
function Hero() {
    return (
        <section id="hero" className="hero-section bg-light py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text content */}
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold text-success mb-3">
                            Welcome to FarmConnect
                        </h1>
                        <p className="lead text-muted mb-4">
                            Revolutionizing agriculture through smart technology.
                            Connect with fellow farmers, access market insights,
                            and grow your farm with our innovative platform.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-success btn-lg">
                                Get Started
                            </button>
                            <button className="btn btn-outline-success btn-lg">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Placeholder image */}
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img
                                src="https://placehold.co/600x400/28a745/ffffff?text=FarmConnect+Hero+Image"
                                alt="FarmConnect Hero"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
