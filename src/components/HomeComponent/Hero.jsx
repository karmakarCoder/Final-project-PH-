import React from "react";
import banner from "../../assets/banner1.jpg";

const Hero = () => {
  return (
    <div className="h-[550px] w-full">
      <img src={banner} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default Hero;
