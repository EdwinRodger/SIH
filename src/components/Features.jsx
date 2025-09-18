import React from 'react'

/**
 * Features Component
 * Displays 5 feature cards in a responsive grid
 * Each card has a placeholder title and description
 */
function Features() {
    // Feature data array
    const features = [
        {
            title: "Image Disease Detection",
            description: "Detect diseases in your crops with advanced image recognition technology.",
            icon: "🔍"
        },
        {
            title: "AI ChatBot",
            description: "Get real-time answers to your questions with our AI chatbot.",
            icon: "🤖"
        },
        {
            title: "Weather Forecast",
            description: "Weather predictions to help you plan your farming activities and protect your crops.",
            icon: "🌤️"
        },
        {
            title: "Fertilizer Recommendation",
            description: "Get recommendations for the best fertilizers for your crops.",
            icon: "🌱"
        },
        {
            title: "Query Support",
            description: "Get support for your queries with our experts.",
            icon: "💬"
        }
    ]

    return (
        <section id="features" className="py-5 bg-white">
            <div className="container">
                {/* Section header */}
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center mb-5">
                        <h2 className="display-5 fw-bold text-success mb-3">
                            Why Choose FarmConnect?
                        </h2>
                        <p className="lead text-muted">
                            Our platform provides everything you need to modernize your farming operations
                            and increase your productivity.
                        </p>
                    </div>
                </div>

                {/* Features grid */}
                <div className="row g-4 d-flex justify-content-center">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm border-5 border-success-subtle rounded-5">
                                <div className="card-body text-center p-4">
                                    <div className="display-4 mb-3">
                                        {feature.icon}
                                    </div>
                                    <h5 className="card-title text-success mb-3">
                                        {feature.title}
                                    </h5>
                                    <p className="card-text text-muted">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
