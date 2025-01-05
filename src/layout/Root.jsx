import React from "react";
import Nav from "../shared/nav/Nav";
import Footer from "../shared/footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
