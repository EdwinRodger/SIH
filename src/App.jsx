import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FarmerHelpdesk from './pages/FarmerHelpdesk'
import Marketplace from './pages/Marketplace'

/**
 * Main App Component
 * Sets up routing for the entire application
 * Uses React Router v7 for declarative routing
 */
function App() {
    return (
        <div className="App">
            <Routes>
                {/* Home page route */}
                <Route path="/" element={<Home />} />

                {/* Authentication routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* FarmerHelpdesk route */}
                <Route path="/farmers-helpdesk" element={<FarmerHelpdesk />} />

                {/* Marketplace route */}
                <Route path="/marketplace" element={<Marketplace />} />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
