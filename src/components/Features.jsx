import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Features Component
 * Displays 5 feature cards in a responsive grid
 * Each card has a placeholder title and description
 */
function Features() {
    const { t } = useTranslation()
    // Feature data array
    const features = t('features.cards', { returnObjects: true })

    return (
        <section id="features" className="py-5 bg-white">
            <div className="container">
                {/* Section header */}
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center mb-5">
                        <h2 className="display-5 fw-bold text-success mb-3">
                            {t('features.heading')}
                        </h2>
                        <p className="lead text-muted">
                            {t('features.subheading')}
                        </p>
                    </div>
                </div>

                {/* Features grid */}
                <div className="row g-4 d-flex justify-content-center">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm border-5 border-success-subtle rounded-5">
                                <div className="card-body text-center p-4" onClick={() => {
                                    if (feature.link) {
                                        window.location.href = feature.link
                                    }
                                }}>
                                    <div className="display-4 mb-3">
                                        {feature.icon}
                                    </div>
                                    <h5 className="card-title text-success mb-3">
                                        {feature.title}
                                    </h5>
                                    <p className="card-text text-muted">
                                        {feature.desc}
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
