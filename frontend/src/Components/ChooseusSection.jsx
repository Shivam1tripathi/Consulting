import React from "react";
import RoiIcon from "../Assets/Icons/circle-dollar-sign.svg";
import DesignIcon from "../Assets/Icons/paintbrush-2.svg";
import MarketingIcon from "../Assets/Icons/circle-dollar-sign.svg";

const ChooseusSection = () => {
  return (
    <div id="services" className="py-16  text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-blue-900 mb-2">Why Choose Us?</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
      {/* Underline line */}

      {/* Features Section */}
      <div className="flex flex-col mt-6 md:flex-row justify-center items-start gap-8 px-4 md:px-0">
        {/* Feature Card 1 - Potential ROI */}
        <div className="flex flex-col items-center cursor-pointer max-w-xs p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
          <img
            src={RoiIcon}
            alt="ROI Icon"
            className="w-12 h-12 text-blue-500 mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Potential ROI
          </h3>
          <p className="text-gray-600 text-sm">
            Our strategies are designed to help you optimize your investment and
            maximize your return. From financing, we will lead you through
            proper ROI-driven plans for success.
          </p>
        </div>

        {/* Feature Card 2 - Design */}
        <div className="flex flex-col items-center max-w-xs cursor-pointer p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
          <img
            src={DesignIcon}
            alt="Design Icon"
            className="w-12 h-12 text-blue-500 mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Design</h3>
          <p className="text-gray-600 text-sm">
            Our knowledge in architecture and interior design ensures the
            perfect guidance, style, and functionality for home and property
            renovations to accommodate all of your needs.
          </p>
        </div>

        {/* Feature Card 3 - Marketing */}
        <div className="flex flex-col items-center max-w-xs cursor-pointer p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
          <img
            src={MarketingIcon}
            alt="Marketing Icon"
            className="w-12 h-12 text-blue-500 mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Marketing
          </h3>
          <p className="text-gray-600 text-sm">
            Bringing your brand to life, our marketing experts provide a
            well-rounded digital and physical approach to grow and establish
            your brand in the competitive real estate market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseusSection;
