import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo-rhino.png'; // Asegúrate de tener el logo en /src/assets

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="cursor-pointer hover:text-white" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-white" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="cursor-pointer hover:text-white" />
          </a>
          <a href="https://wa.me/17869676854" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="cursor-pointer hover:text-white" />
          </a>
        </div>
        <div className="login-register">
          <div className='vertical-line'></div>
          <span className="border-r border-gray-500 pr-2"> </span>
         {/* <a href="/login" className="hover:text-white">Login / Register</a> */}
        </div>
      </div>

      {/* Navigation */}
      <div className="navbar">
        <img src={logo} alt="Rhino Logo" className="mx-auto w-32" />
        <nav className="menu">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#testimonials" className="hover:text-cyan-400">Testimonials</a>
          <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
