import React from "react";
import "../index.css";
const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row outerdivaboutus">
      <div className="md:w-1/2 p-6">
        <h2 className="mb-4">About us</h2>
        <div className="leftabout">
          <h1 className="text-3xl font-bold mb-2">
            Effective and Quality Farming
          </h1>
          <p className="text-gray-600">
            Prafal is an agri-tech company leveraging technology to grow
            sustainable products and by-products of Mushroom cultivation. We
            deliver it from the farm to our customer's doorstep efficiently.
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="./images/mush.jpeg" alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Aboutus;
