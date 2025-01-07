import React from "react";

const MenuCard = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-7">
      <div className="lg:w-[125px] min-w-[82px] min-h-[82px] lg:h-[95px] sm:rounded-tr-full sm:rounded-br-full sm:rounded-bl-full sm:rounded-tl-none rounded-tl-full rounded-tr-full rounded-bl-full bg-[#D9D9D9]"></div>
      <div>
        <div className="xl:text-xl text-base flex items-center justify-between font-normal pb-1 xl:pb-2">
          <h5 className="uppercase text-primaryBlack">
            ROAST DUCK BREAST ------------
          </h5>
          <p className="text-golden">$14.5</p>
        </div>
        <p className="font-normal text-xs xl:text-base text-dark3">
          Roasted duck breast (served pink) with gratin potato and a griottine
          cherry sauce
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
