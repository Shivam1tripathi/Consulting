import React from "react";
import Navbar from "../Components/Navbar";
import ConsultationSection from "../Components/ConsultationSection";
import RealtorSection from "../Components/RealtorSection";
import image1 from "../Assets/Shapes/Ellipse 8.svg";
import dotbox from "../Assets/Shapes/Group 1.svg";
import arrow from "../Assets/Shapes/Subtract-1.svg";
import ChooseusSection from "../Components/ChooseusSection";
import Imagesection from "../Components/Imagesection";
import AboutUs from "../Components/AboutUs";
import backgroundImage from "../Assets/Images/Rectangle.svg";
import OurProject from "../Components/OurProject";
import HappyClientSection from "../Components/HappyClientSection";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="h-screen  ">
      <Navbar />
      <ConsultationSection />
      <RealtorSection />
      <img
        src={image1}
        className="h-80 absolute"
        style={{ top: "150vh" }}
        alt=""
        srcset=""
      />
      <img
        src={dotbox}
        className="w-56 absolute"
        style={{ top: "170vh", left: "15vh" }}
        alt=""
        srcset=""
      />
      <ChooseusSection />
      <div className=" h-10 flex justify-end items-center">
        <img src={arrow} alt="" className="h-6 px-4" />
      </div>
      <Imagesection />
      <AboutUs />
      <OurProject />
      <HappyClientSection />
      <div className="h-80 w-full mt-6 flex flex-col items-center justify-center">
        <img
          className="absolute -z-10 object-cover"
          src={backgroundImage}
          style={{ filter: "brightness(30%)" }}
          alt=""
          srcset=""
        />
        <p className="font-bold text-2xl text-white text-center ">
          Learn more about our listing process ,as well as our <br />
          additional staging and design work.
        </p>
        <button className="bg-white hover:bg-blue-100 rounded-sm text-blue-600 p-2 px-20 mt-4 font-semibold">
          Learn More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
