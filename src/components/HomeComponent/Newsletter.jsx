import React from "react";
import bg from "../../assets/newsletterBg.jpg";

const Newsletter = () => {
  return (
    <div className="xl:pb-16 pb-8">
      <div className="container">
        <div className="relative w-full lg:h-[280px] h-[180px] xl:h-[500px]">
          <img src={bg} alt="bg" className="w-full h-full" />
          <div className="absolute top-[50%] rounded-md lg:rounded-none -translate-y-[50%] left-[50%] -translate-x-[50%] w-[80%] py-2 lg:px-28 lg:py-10 xl:py-20 px-2 xl:px-36 bg-primaryWhite flex flex-col items-center text-center justify-center text-primaryBlack">
            <h5 className="font-normal text-lg xl:text-4xl uppercase pb-0 xl:pb-2">
              Bistro Boss
            </h5>
            <p className="font-normal text-xs xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
