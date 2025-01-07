import React from "react";
import Hero from "../../components/HomeComponent/Hero";
import OnlineOrder from "../../components/HomeComponent/OnlineOrder";
import Newsletter from "../../components/HomeComponent/Newsletter";
import Menu from "../../components/HomeComponent/Menu";

const Home = () => {
  return (
    <>
      <Hero />
      <OnlineOrder />
      <Newsletter />
      <Menu />
    </>
  );
};

export default Home;
