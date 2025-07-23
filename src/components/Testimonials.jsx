import Slider from "react-slick";
import phone from "../assets/iconos/testimonialsPhone.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Users = [
  {
    id: 1,
    name: "Aaron Madison",
    testimonial:
      "Wow, amazing team! I'm really impressed with how clean and professional the painting work was. You helped me choose the perfect colors and the final result looks incredible. I’ll definitely recommend Rhino to anyone looking to transform their space!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 2,
    name: "John Vhane",
    testimonial: "This is an amazing service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/59.jpg"
  },
  {
    id: 3,
    name: "Jane Smith",
    testimonial: "I had a great experience.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/99.jpg"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  return (
    <section className="testimonials-section" id="testimonials" >
      
        <Slider {...settings} className="testimonial-slider">
            {Users.map(user => (
              <div className="testimonials-layout" >
                <div>
                  <h3 className="subheading">People love us</h3>
                  <h1 className="heading">TESTIMONIALS</h1>
                </div>
                <div className="row-slider">  
                  <div key={user.id} className="testimonial-card">
                      <div>
                          <img src={user.image} alt={user.name} className="user-image" />
                      </div>
                    
                      <div className="testimonial-text">
                          <h2>{user.name}</h2>
                          <p>{user.testimonial}</p>
                          <p className="stars">{"⭐".repeat(user.rating)}</p>
                      </div>
                  </div>
                  <div className="phone-wrapper">
                    <img src={phone} alt="Phone" className="phone-image" />
                  </div>
                </div>
                
            </div>
            ))}
        
        </Slider>

        
    </section>
  );
};

export default Testimonials;

