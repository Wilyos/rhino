import Slider from "react-slick";
import phone from "../assets/iconos/testimonialsPhone.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Users = [
  {
    id: 1,
    name: "Juliana Cadavid",
    testimonial:
      "Wow, amazing team! I'm really impressed with how clean and professional the painting work was. You helped me choose the perfect colors and the final result looks incredible. I’ll definitely recommend Rhino to anyone looking to transform their space!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 2,
    name: "John Doe",
    testimonial: "This is an amazing service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Jane Smith",
    testimonial: "I had a great experience.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
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
    <section className="testimonials-section" style={{  background: 'linear-gradient(to bottom, #666666 12%, #ababab 80%)'}}>
      <h3 className="subheading">People love us</h3>
      <h1 className="heading">TESTIMONIALS</h1>

      <div className="testimonials-layout" >
        <Slider {...settings} className="testimonial-slider">
          {Users.map(user => (
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
          ))}
        </Slider>

        <div className="phone-wrapper">
          <img src={phone} alt="Phone" className="phone-image" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

