import React from "react";
import "../index.css";
function Weoffer(props) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {props.val === "1" ? (
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h5 className="text-gray-600 text-base font-bold mb-2">
                We offer
              </h5>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                Healthy Mushroom Fields
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Leveraging era, we offer low to mid-income earners in urban
                towns with accessible, affordable and high-quality mushrooms and
                farms produce to their doors. Prafal agro is a excellent driven
                enterprise, which follows all established best norms and
                standards for production & providing an assortment of mushroom
                vegetation, cold storages and so on.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="shapes md:ml-8">
                <div className="triangle"></div>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>
        ) : props.val === "2" ? (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              BLOGS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are always here to help whenever you might have some questions
            </p>
          </div>
        ) : props.val === "3" ? (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, we are always here for you. Here’s how you
              can reach us...
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              {" "}
              About Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prafal Agrotech is formed with the aid of the inspiring students
              to change the perspective of people towards agriculture and make
              it a viable profession for future generations.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Weoffer;
