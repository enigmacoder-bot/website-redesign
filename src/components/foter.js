import React from "react";
import Address from "./address";
import Map from "./map";
import "../index.css";
const Foter = (props) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-4">Get Updates</h3>
            <p className="text-gray-500 mb-4">
              Get updates and insights on the agribusiness ecosystem from the
              eyes of our industry experts.
            </p>
            <form>
              <div className="flex flex-wrap">
                <input
                  name="username"
                  type="email"
                  className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-4">
              <a href="https://www.facebook.com/PrafalAgro" target="_blank">
                <img
                  className="h-8 w-8 inline-block mr-2"
                  src="./images/facebook.png"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/prafalagro/" target="_blank">
                <img
                  className="h-8 w-8 inline-block mr-2"
                  src="./images/instagram.png"
                  alt=""
                />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img
                  className="h-8 w-8 inline-block mr-2"
                  src="./images/twitter.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/prafal-agro/"
                target="_blank"
              >
                <img
                  className="h-8 w-8 inline-block"
                  src="./images/linkedin.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {props.cor ? <Address /> : <Map />}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-500">
              @2021 prafal agro, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foter;
