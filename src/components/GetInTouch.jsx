import React, { useState } from 'react'

/**
 * GetInTouch Component
 * Contact form section with Name, Email, and Message fields
 * Uses Bootstrap form styling and validation
 */
function GetInTouch() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: ''
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
        // In a real app, this would send data to a backend
        console.log('Contact form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')

        // Reset form
        setFormData({
            name: '',
            number: '',
            message: ''
        })
    }

    return (
        <section id="contact" className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* Section header */}
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold text-success mb-3">
                                Get In Touch
                            </h2>
                            <p className="lead text-muted">
                                Have questions? We'd love to hear from you.
                                Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>

                        {/* Contact form */}
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="number" className="form-label">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">
                                            Message *
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us how we can help you..."
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success btn-lg px-5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch
