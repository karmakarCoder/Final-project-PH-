import React from "react";
import Title from "../../shared/Title";
import product from "../../assets/product.jpg";
import { OnlinefoodProducts } from "../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OnlineOrder = () => {
  return (
    <div className="py-10">
      <div className="container">
        <Title />
        {/* product */}
        <div className="pt-4">
          <Swiper
            pagination={true}
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              730: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper3"
          >
            {OnlinefoodProducts?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  {" "}
                  <div className="w-full h-[178px] lg:h-[285px] xl:h-[450px] relative">
                    <img
                      src={item.img}
                      alt="product"
                      className="w-full h-full object-cover"
                    />
                    <div className="xl:text-3xl text-sm lg:text-base px-4 w-full text-center flex items-center justify-center text-primaryWhite uppercase absolute bottom-5">
                      <div className="relative  z-10">
                        <h5 className="inline-block">{item.title}</h5>
                        <h4 className="text-primaryBlack w-full opacity-80 absolute bottom-[-2px] -z-10 left-[1px]">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrder;
