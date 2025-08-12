import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chatbot from './pages/Chatbot';
import UseCases from './pages/UseCases';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/*" element={
              <div>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/use-cases" element={<UseCases />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;