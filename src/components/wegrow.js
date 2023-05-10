import React from "react";
import "../index.css";
const Wegrow = (props) => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-center text-3xl font-bold mb-6">Our Products</h2>
      <div className="flex justify-center flex-col md:flex-row md:justify-between gap-2 mx-10 my-10">
        <div className="product mb-6 md:mb-0 sm:justify-center left-6">
          <img className="wegrowpic" src="./images/mush3.png" alt="" />
          <h3 className="text-center text-lg font-semibold mt-4">
            White Button Mushrooms
          </h3>
          <p className="wegrowdesc text-center my-4">
            White button mushroom (Agaricus bisporus) is the most consumed
            variety of mushrooms and is packed with nutrients.They have a mild
            flavour, soft texture and a milky hue to them.
          </p>
          <div className="text-center">
            <h5 className="text-blue-500 cursor-pointer">learn More</h5>
          </div>
        </div>
        <div className="product mb-6 md:mb-0">
          <img className="wegrowpic" src="./images/mush4.png" alt="" />
          <h3 className="text-center text-lg font-semibold mt-4">
            Oyster Mushrooms
          </h3>
          <p className="wegrowdesc text-center my-4">
            Grown appreciably in tropical areas, one can locate this “fan
            shaped” mushroom and is recognized via distinct whitish hue. They're
            exquisite popular in cooking, and have a mild flavor and odor.
          </p>
          <div className="text-center">
            <h5 className="text-blue-500 cursor-pointer">learn More</h5>
          </div>
        </div>
        <div className="product">
          <img className="wegrowpic" src="./images/mush6.png" alt="" />
          <h3 className="text-center text-lg font-semibold mt-4">
            Portobello Mushrooms
          </h3>
          <p className="wegrowdesc text-center my-4">
            Called “Cep mushrooms”, they have got a woody flavor to them.
            They're one of the most flavorsome mushrooms and are very popularly
            utilized in cooking.
          </p>
          <div className="text-center">
            <h5 className="text-blue-500 cursor-pointer">learn More</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wegrow;
