import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo-rhino.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar el click y enviar evento ViewContent
  const handleNavClick = (section) => {
    setMenuOpen(false);
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('track', 'ViewContent', { content_name: section });
      } catch (err) {
        console.warn('Meta Pixel track error:', err);
      }
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar" id='home'>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://wa.me/17869676854" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
        <div className="login-register">
          <div className="vertical-line"></div>
          {/* <a href="/login">Login / Register</a> */}
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <img src={logo} alt="Rhino Logo" className="logo" />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => handleNavClick('Services')}>Services</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#portfolio" onClick={() => handleNavClick('Portfolio')}>Portfolio</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
