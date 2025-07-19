import testi1 from '../assets/iconos/estrellaTestimonials.png'
import testi2 from '../assets/iconos/happyClients.png'
import testi3 from '../assets/iconos/projectsTestimonials.png'
import testi4 from '../assets/iconos/coffeTestimonials.png'


const Numbers = () => {
  return (
    <div className="numbers-section">
        <div className="number-item">
            <img src={testi1} alt="" />
            <h1>200</h1>
            <p>Our Customers</p>
        </div>
        <div className="number-item">
            <img src={testi2} alt="" />
            <h1>110</h1>
            <p>Happy Clients</p>
        </div>
        <div className="number-item">
            <img src={testi3} alt="" />
            <h1>75</h1>
            <p>Projects Completed</p>
        </div>
        <div className="number-item">
            <img src={testi4} alt="" />
            <h1>50</h1>
            <p>Coffe with Clients</p>
        </div>
    </div>
  )
}

export default Numbers