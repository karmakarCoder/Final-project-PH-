import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row h-[356px] min-[660px]:h-[250px] md:h-[220px] sm:h-[200px] lg:h-[300px] items-center w-full text-primaryWhite">
        <div className="bg-[#1F2937] h-full  w-full py-6 lg:py-12 sm:pr-11">
          <div className="container flex flex-col items-center sm:items-end">
            <div className="flex flex-col items-center text-center">
              <h4 className="font-medium text-center text-lg lg:text-3xl uppercase mb-4">
                CONTACT US
              </h4>
              <p className="font-medium text-base lg:text-lg capitalize text-center flex flex-col items-center gap-y-2">
                123 ABS Street, Uni 21, Bangladesh <br />
                <a href="#">+88 123456789</a>
                Mon - Fri: 08:00 - 22:00 <br />
                Sat - Sun: 10:00 - 23:00 <br />
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] h-full flex flex-col items-end w-full py-6 lg:py-12 sm:pl-11">
          <div className="container flex flex-col items-center sm:items-start">
            <div className="flex items-center flex-col text-center">
              <h4 className="font-medium text-center text-xl lg:text-3xl mb-4">
                Follow US
              </h4>
              <p className="lg:text-lg text-base font-medium">
                Join us on social media
              </p>
              <div className="flex items-center mt-4 gap-x-2 text-2xl">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <RiInstagramFill />
                </a>
                <a href="#">
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-primaryWhite font-normal text-xs lg:text-base bg-primaryBlack py-3 text-center">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
