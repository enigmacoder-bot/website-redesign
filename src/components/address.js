import React from "react";
import "../index.css";
const Address = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      <div className="text-center">
        <p className="mb-2">
          Nain Center,
          <br />
          Sahydri College of Engineering,
          <br />
          Adyar Managlore, 575007
        </p>
        <p className="mb-2">
          <a
            href="mailto:prafalagro@yahoo.in"
            className="text-blue-500 hover:underline"
          >
            prafalagro@yahoo.in
          </a>
          <br />
          <a href="tel:+918188116677" className="text-blue-500 hover:underline">
            +91 818 811 6677
          </a>
        </p>
      </div>
    </div>
  );
};

export default Address;
