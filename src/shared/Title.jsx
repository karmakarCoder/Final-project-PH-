import React from "react";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <div className="flex items-center flex-col justify-center">
      <p className="italic text-xs xl:text-base text-golden mb-2 xl:mb-3">
        ---{subTitle ? subTitle : "From 11:00am to 10:00pm"}---
      </p>
      <h5 className="xl:py-4 py-2 border-y-2 border-y-dark6 text-xl lg:text-2xl xl:text-4xl font-normal text-primaryBlack">
        {mainTitle ? mainTitle : "ORDER ONLINE"}
      </h5>
    </div>
  );
};

export default Title;
