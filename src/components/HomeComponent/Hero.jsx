import React, { useState } from "react";
import banner from "../../assets/banner1.jpg";
import banner2 from "../../assets/1600w-N0tLXTR6eGs.webp";
import banner3 from "../../assets/preview-1315.jpg";
import banner4 from "../../assets/restaurant-food-menu-banner-template-design-1156db347c0adf57e7e21d8ab170ecec_screen.jpg";
import banner5 from "../../assets/Restaurant_Banners.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper/modules";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const banners = [
    {
      img: banner,
    },
    {
      img: banner2,
    },
    {
      img: banner3,
    },
    {
      img: banner4,
    },
    {
      img: banner5,
    },
  ];
  return (
    <div className=" w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        effect="fade"
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs, EffectFade, Autoplay]}
        className="mySwiper2"
      >
        {banners?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="banner" className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {banners?.map((item, index) => (
          <SwiperSlide key={index} className="lg:!w-32 !w-20 !h-12 lg:!h-20">
            <img
              src={item.img}
              alt="thumb"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
