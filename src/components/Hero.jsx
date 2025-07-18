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


const Hero = () => {
  return (
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
        <img src={banner1} alt="Banner 1" className="w-full h-80 object-contain" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" className="w-full h-80 object-contain" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" className="w-full h-80 object-contain" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
