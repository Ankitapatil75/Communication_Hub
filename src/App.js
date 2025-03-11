import './App.css';
import Home from './components/home';
import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router';
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="w-100 py-3 bg-white shadow-sm d-flex justify-content-between align-items-center px-4">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" style={{ height: "50px", width: "50px" }} />


          {/* Mobile Menu Toggle Button */}
          <button className="d-lg-none btn border-0" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Navigation Menu */}
          <nav className={`d-lg-flex ${menuOpen ? "d-block" : "d-none"} w-100 w-lg-auto text-center`}>
            <ul className="nav flex-column flex-lg-row align-items-center">
              <li className="nav-item"><Link to="/" className="nav-link text-dark">Home</Link></li>
              <li className="nav-item"><Link to="/event" className="nav-link text-dark">Events</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link text-dark">About</Link></li>
            </ul>
          </nav>
        </header>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
