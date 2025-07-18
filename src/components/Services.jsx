
import icono1 from '../assets/iconos/icono1.png';
import icono2 from '../assets/iconos/icono2.png';
import icono3 from '../assets/iconos/icono3.png'; 
import icono4 from '../assets/iconos/icono4.png';
import flecha from '../assets/iconos/flechaAzul.png';



export const Services = () => {
  return(
    <section>
      <div className="services-section"  style={{background: 'linear-gradient(#666666 12%, #ABABAB 80%)'}}> 

      
          <div className="services-info">
            <h2>We offer best services</h2>
            <h1>OUR SERVICES</h1>
            <p>
              At Rhino, we go beyond just selling paint — we deliver complete wall transformations. From high-quality paints for both indoor and outdoor spaces to
              expert painting services and wall repair solutions, we make sure every surface looks flawless. Whether you're refreshing your home or upgrading your
              workspace, our team is here to bring your walls back to life.
            </p>
          </div>
           <div class="services-grid">
            <div class="service-box">
              <img src={icono1} alt="icono 1" className='service-icon' />
              <div class="service-text">
                <h3>Premium Paint Sales</h3>
                <p>
                  Our professional team delivers detailed, clean, and efficient interior painting, ensuring every room reflects quality and style.
                </p>
              </div>
              <img src={flecha} alt="flecha" className='service-arrow' />
            </div>
            <div class="service-box">
              <img src={icono2} alt="icono 1" className='service-icon' />
              <div class="service-text">
                <h3>Interior Painting Services</h3>
                <p>Our professional team delivers detailed, clean, and efficient interior painting, ensuring every room reflects quality and style.</p>
              </div>
               <img src={flecha} alt="flecha" className='service-arrow' />
            </div>
            <div class="service-box">
              <img src={icono3} alt="icono 1" className='service-icon' />
              <div class="service-text">
                <h3>Exterior Painting Solutions</h3>
                <p>We use durable, weather-resistant coatings and expert techniques to elevate and protect the exterior of your property.</p>
              </div>
               <img src={flecha} alt="flecha" className='service-arrow' />
            </div>
            <div class="service-box">
              <img src={icono4} alt="icono 4" className='service-icon' />
              <div class="service-text">
                <h3>Wall Repair & Restoration</h3>
                <p>
                  Before we paint, we perfect. Our resurface and repair service fixes cracks, dents, and other imperfections to ensure smooth, flawless walls ready for finishing</p>
              </div>
               <img src={flecha} alt="flecha" className='service-arrow' />
            </div>
          </div>
        </div>
      </section>
  )
}