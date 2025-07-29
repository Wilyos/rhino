import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import './styles/Hero.css'; 

import banner1 from '../assets/banners/banner1.webp';
import banner2 from '../assets/banners/banner2.webp';
import banner3 from '../assets/banners/banner3.webp';
import heroImg from '../assets/gallery/interior-ad-1.jpg'


const Hero = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        className='swiper'
      >
        <SwiperSlide>
          <a href="#contact">
            <img src={banner1} alt="Banner 1" className="w-full h-80 object-contain" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#contact">
            <img src={banner2} alt="Banner 2" className="w-full h-80 object-contain" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#contact">
            <img src={banner3} alt="Banner 3" className="w-full h-80 object-contain" />
          </a>
        </SwiperSlide>
      </Swiper>


      <section className='hero-mobile'>
          <h2>Our Premium Painting Services</h2>
          <p>Looking to refresh your space or add value to your property? Our expert painting and wall repair services are the perfect solution.</p>
          <p className='subtitle-hero'>Trust Rhino to bring color, precision, and quality to every wall.</p>
          <div className='hero-img-box'>
              <img src={heroImg} alt="hero-img" />
          </div>
          <div className='buttons-hero'>
               <button className='hero-contact-mobile'
               onClick={() => {
                const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
               >Contact</button>
          </div>
         
      </section>
    </>
  );
};

export default Hero;
