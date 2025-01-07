import React from "react";
import Title from "../../shared/Title";
import MenuCard from "../../shared/MenuCard";

const Menu = () => {
  return (
    <div className="xl:pb-14 pb-8">
      <div className="container">
        <Title subTitle={"Check it out"} mainTitle={"FROM OUR MENU"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          <div className="flex flex-col gap-y-6">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
          <div className="flex flex-col gap-y-6">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
