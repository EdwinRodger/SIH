import React, { useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function FarmerHelpdesk() {
    const { t } = useTranslation()

    // Hardcoded supervisors dataset grouped by state and division (mock backend)
    const stateDivisionData = useMemo(() => ({
        'Madhya Pradesh': [
            { division: 'Bhopal', name: 'Anil Verma', phone: '+91 9812345670', email: 'anil.verma@farmconnect.in' },
            { division: 'Indore', name: 'Priya Sharma', phone: '+91 9812345671', email: 'priya.sharma@farmconnect.in' },
            { division: 'Gwalior', name: 'Rohit Singh', phone: '+91 9812345672', email: 'rohit.singh@farmconnect.in' },
            { division: 'Jabalpur', name: 'Kavita Jain', phone: '+91 9812345673', email: 'kavita.jain@farmconnect.in' },
            { division: 'Ujjain', name: 'Vikas Mehta', phone: '+91 9812345674', email: 'vikas.mehta@farmconnect.in' },
            { division: 'Sagar', name: 'Neha Gupta', phone: '+91 9812345675', email: 'neha.gupta@farmconnect.in' },
            { division: 'Rewa', name: 'Amit Patel', phone: '+91 9812345676', email: 'amit.patel@farmconnect.in' },
            { division: 'Ratlam', name: 'Sunita Rao', phone: '+91 9812345677', email: 'sunita.rao@farmconnect.in' }
        ],
        'Maharashtra': [
            { division: 'Mumbai', name: 'Suresh Iyer', phone: '+91 9822345670', email: 'suresh.iyer@farmconnect.in' },
            { division: 'Pune', name: 'Aarti Kulkarni', phone: '+91 9822345671', email: 'aarti.kulkarni@farmconnect.in' },
            { division: 'Nagpur', name: 'Rahul Deshmukh', phone: '+91 9822345672', email: 'rahul.deshmukh@farmconnect.in' },
            { division: 'Nashik', name: 'Pooja Joshi', phone: '+91 9822345673', email: 'pooja.joshi@farmconnect.in' },
            { division: 'Aurangabad', name: 'Manoj Patil', phone: '+91 9822345674', email: 'manoj.patil@farmconnect.in' },
            { division: 'Kolhapur', name: 'Sneha Gokhale', phone: '+91 9822345675', email: 'sneha.gokhale@farmconnect.in' },
            { division: 'Solapur', name: 'Nilesh Jagtap', phone: '+91 9822345676', email: 'nilesh.jagtap@farmconnect.in' },
            { division: 'Amravati', name: 'Meera Phadke', phone: '+91 9822345677', email: 'meera.phadke@farmconnect.in' }
        ],
        'Uttar Pradesh': [
            { division: 'Lucknow', name: 'Alok Tiwari', phone: '+91 9833345670', email: 'alok.tiwari@farmconnect.in' },
            { division: 'Kanpur', name: 'Shivani Agarwal', phone: '+91 9833345671', email: 'shivani.agarwal@farmconnect.in' },
            { division: 'Varanasi', name: 'Deepak Yadav', phone: '+91 9833345672', email: 'deepak.yadav@farmconnect.in' },
            { division: 'Prayagraj', name: 'Ritu Srivastava', phone: '+91 9833345673', email: 'ritu.srivastava@farmconnect.in' },
            { division: 'Ghaziabad', name: 'Mohit Sharma', phone: '+91 9833345674', email: 'mohit.sharma@farmconnect.in' },
            { division: 'Meerut', name: 'Swati Gupta', phone: '+91 9833345675', email: 'swati.gupta@farmconnect.in' },
            { division: 'Agra', name: 'Sanjay Singh', phone: '+91 9833345676', email: 'sanjay.singh@farmconnect.in' },
            { division: 'Gorakhpur', name: 'Anita Verma', phone: '+91 9833345677', email: 'anita.verma@farmconnect.in' }
        ]
    }), [])

    const states = Object.keys(stateDivisionData)
    const allDivisions = useMemo(
        () =>
            Object.entries(stateDivisionData).flatMap(([state, items]) =>
                items.map((d) => ({ state, division: d.division }))
            ),
        [stateDivisionData]
    )
    const [selectedState, setSelectedState] = useState('')
    const [selectedDivision, setSelectedDivision] = useState('')

    // Chat form state
    const [chatForm, setChatForm] = useState({
        farmerName: '',
        division: '',
        query: '',
        replyMobile: '',
    })

    const recognitionRef = useRef(null)
    const [isListening, setIsListening] = useState(false)

    // Initialize Web Speech API lazily when starting
    const startVoiceTyping = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        if (!SpeechRecognition) {
            alert(t('helpdesk.voiceUnsupported'))
            return
        }
        if (!recognitionRef.current) {
            const recognition = new SpeechRecognition()
            recognition.lang = (navigator.language || 'en-IN')
            recognition.interimResults = false
            recognition.maxAlternatives = 1
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript
                setChatForm((prev) => ({ ...prev, query: (prev.query ? prev.query + ' ' : '') + transcript }))
            }
            recognition.onend = () => setIsListening(false)
            recognition.onerror = () => setIsListening(false)
            recognitionRef.current = recognition
        }
        setIsListening(true)
        recognitionRef.current.start()
    }

    const stopVoiceTyping = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop()
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setChatForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate sending to backend / SMS gateway
        console.log('Helpdesk query submitted:', chatForm)
        alert(t('helpdesk.submitSuccess'))
        setChatForm({ farmerName: '', division: '', query: '', replyMobile: '' })
    }

    return (
        <div className="FarmerHelpdesk-page">
            <Navbar />
            <div className="container py-4">
                {/* Title */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1 className="fw-bold text-success">{t('helpdesk.title')}</h1>
                        <p className="text-muted mb-0">{t('helpdesk.intro')}</p>
                    </div>
                </div>

                {/* Helpline Selector */}
                <div className="row g-3 mb-5">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-success mb-3">{t('helpdesk.findSupervisor')}</h5>
                                <div className="row g-3 align-items-end">
                                    <div className="col-md-6">
                                        <label className="form-label">{t('helpdesk.state')} *</label>
                                        <select
                                            className="form-select"
                                            value={selectedState}
                                            onChange={(e) => {
                                                setSelectedState(e.target.value)
                                                setSelectedDivision('')
                                            }}
                                        >
                                            <option value="">{t('helpdesk.selectState')}</option>
                                            {states.map((st) => (
                                                <option key={st} value={st}>{st}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">{t('helpdesk.division')} *</label>
                                        <select
                                            className="form-select"
                                            value={selectedDivision}
                                            onChange={(e) => setSelectedDivision(e.target.value)}
                                            disabled={!selectedState}
                                        >
                                            <option value="">{selectedState ? t('helpdesk.selectDivision') : t('helpdesk.selectStateFirst')}</option>
                                            {selectedState && stateDivisionData[selectedState].map((d) => (
                                                <option key={d.division} value={d.division}>{d.division}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Supervisor Card */}
                                {selectedState && selectedDivision && (
                                    (() => {
                                        const sup = stateDivisionData[selectedState].find((d) => d.division === selectedDivision)
                                        if (!sup) return null
                                        return (
                                            <div className="row mt-4">
                                                <div className="col-12 col-lg-8">
                                                    <h5 className="card-title text-success mb-2">{t('helpdesk.details')}</h5>
                                                    <p className="mb-1"><span className="fw-semibold">{t('helpdesk.state')}:</span> {selectedState}</p>
                                                    <p className="mb-1"><span className="fw-semibold">{t('helpdesk.division')}:</span> {sup.division}</p>
                                                    <p className="mb-1"><span className="fw-semibold">{t('helpdesk.name')}:</span> {sup.name}</p>
                                                    <p className="mb-1"><span className="fw-semibold">{t('helpdesk.helpline')}:</span> {sup.phone}</p>
                                                    <p className="mb-3"><span className="fw-semibold">{t('helpdesk.email')}:</span> {sup.email}</p>
                                                    <div className="d-flex gap-2">
                                                        <a className="btn btn-success" href={`tel:${sup.phone.replace(/\s/g, '')}`}>{t('helpdesk.callNow')}</a>
                                                        <a className="btn btn-outline-success" href={`mailto:${sup.email}`}>{t('helpdesk.sendEmail')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })()
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Box */}
                <div className="row g-3">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-success mb-3">{t('helpdesk.chatTitle')}</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">{t('helpdesk.farmerName')} *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="farmerName"
                                                value={chatForm.farmerName}
                                                onChange={handleChange}
                                                required
                                                placeholder={t('helpdesk.placeholder.farmerName')}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">{t('helpdesk.division')} *</label>
                                            <select
                                                className="form-select"
                                                name="division"
                                                value={chatForm.division}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">{t('helpdesk.selectDivision')}</option>
                                                {allDivisions.map((d) => (
                                                    <option key={`${d.state}-${d.division}`} value={`${d.state} - ${d.division}`}>
                                                        {d.state} - {d.division}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">{t('helpdesk.replyMobile')} *</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="replyMobile"
                                                value={chatForm.replyMobile}
                                                onChange={handleChange}
                                                required
                                                placeholder={t('helpdesk.placeholder.mobile')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">{t('helpdesk.yourQuery')} *</label>
                                            <div className="input-group">
                                                <textarea
                                                    className="form-control"
                                                    name="query"
                                                    rows="3"
                                                    value={chatForm.query}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder={t('helpdesk.typeQuestion')}
                                                ></textarea>
                                                <button
                                                    type="button"
                                                    className={`btn ${isListening ? 'btn-danger' : 'btn-success'}`}
                                                    onClick={isListening ? stopVoiceTyping : startVoiceTyping}
                                                    title="Voice typing"
                                                >
                                                    {isListening ? t('helpdesk.stop') : t('helpdesk.speak')}
                                                </button>
                                            </div>
                                            <div className="form-text">{t('helpdesk.micHint')}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-3">
                                        <button type="submit" className="btn btn-success">{t('helpdesk.submit')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FarmerHelpdesk