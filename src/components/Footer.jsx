import logo from '../assets/iconos/logo-redondo.png'
import facebook from '../assets/iconos/facebook.png'
import instagram from '../assets/iconos/instagram.png'
import tiktok from '../assets/iconos/tiktok.png'
import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbMail } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from 'react';

const Footer = () => {


    const [mensaje, setMensaje] = useState('');

    
  return (
    <footer className="footer">
        <div className="footer-background"></div>
        <div className="footer-content">
            <div className="footer-top">
                <div className="footer-logo-img">
                    <img src={logo} alt="Rhino Logo" className="footer-logo" />
                </div>
                <div className="footer-logo-text">
                    <p>
                        At Rhino, we take pride in delivering top-quality painting and wall
                        repair services. With years of experience and a skilled team of
                        professionals, we offer comprehensive solutions including interior
                        and exterior painting, personalized color consultation, and wall
                        resurfacing. <strong>Our mission is to transform your spaces with precision and care - always providing clean, efficient, and affordable results that exceed expectations.</strong>
                    </p>
                </div>
            </div>
            <div className="footer-bot">
                <div className="footer-contact">
                    <h3>Contact us</h3>
                    <hr />
                    <span>
                        <RiMapPin2Line className='icon-form-footer' />
                        <p>  1119 Deauville ST E, Lehigh Acres FL 33974</p>
                    </span>
                    <span>
                        <HiOutlineDevicePhoneMobile className='icon-form-footer'/>
                        <p> +1 786 967 68 54</p>
                    </span>
                    <span>
                        <TbMail  className='icon-form-footer'/>
                        <p> manager@rhinousacom.org</p>
                    </span>
                
                

                    <div className="footer-socials">
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={tiktok} alt="TikTok" /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Useful links</h3>
                    <hr />
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Our services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#portfolio">Our portfolio</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h3>Send Me a Mesagge</h3>
                    <hr />
                    <p><strong>Got questions about our products or services?</strong></p>
                    <p>We’re here to help! Fill out the form below and we’ll get back to you as soon as possible. Whether you're curious about prices, paint options, or repair solutions — don’t hesitate to reach out.</p>
                    <form className="newsletter-form" onSubmit={(e) => {
                        e.preventDefault();
                        const numero = '17869676854';
                        const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
                        window.open(enlace, '_blank'); 
                    }}>
                        <input type="text"
                            placeholder="Your mesagge.."
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            className="input" />
                        <button type="submit"> <IoLogoWhatsapp  className="send-icon"  /> </button>
                    </form>
                    <p><strong>Join our list of clients.</strong></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer