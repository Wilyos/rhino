import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbMail } from "react-icons/tb";
import { useState } from "react";
import axios from 'axios';

const ContactForm = () => {


    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const res = await axios.post('https://correo-rhino.onrender.com/api/send-email', formData);
        if (res.data.success) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error(error);
        setStatus('Error sending message. Please ensure the server is online.');
      }
  };

  return (
    <section className="contact-section" id="contact">
        <div className="contact-header">
            <p>Get in touch with us</p>
            <h1>CONTACT US</h1>
        </div>

        <div className="contact-info">
            <div className="info-item">
                <RiMapPin2Line  className="icon-form"/>
                <span>1119 Deauville ST E, Lehigh Acres FL 33974</span>
            </div>
            <div className="info-item">
                <HiOutlineDevicePhoneMobile className="icon-form" />
                <span>+1 786 967 68 54</span>
            </div>
            <div className="info-item">
                <TbMail className="icon-form" />
                <span>manager@rhinousacom.org </span>
            </div>
        </div>

        <div className="contact-map">
           <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4245.303132399374!2d-81.57793216897035!3d26.524620750477606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db0b3e25101525%3A0x7f796bb38cfc4a4b!2s1119%20Deauville%20St%20E%2C%20Lehigh%20Acres%2C%20FL%2033974%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1753115418686!5m2!1ses-419!2sco"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <input type="text" name="name" placeholder="*Name" value={formData.name} required onChange={handleChange} />
                <input type="email" name="email" placeholder="*E-mail" value={formData.email} required onChange={handleChange} />
            </div>
            <input type="text" name="subject" placeholder="*Subject" value={formData.subject} required onChange={handleChange} />
            <textarea placeholder="*Write your message" name="message" rows="5" value={formData.message} required onChange={handleChange}></textarea>
            <button type="submit" className="button-form">Send Message</button>
        <p>{status}</p>

        </form>
        </section>

  )
}

export default ContactForm