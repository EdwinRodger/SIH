import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

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

                {/* Catch-all route for 404 */}
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
