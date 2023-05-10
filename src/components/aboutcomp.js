import React from "react";
import "../index.css";
function AboutComp(props) {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="p-6">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2">Our Values</div>
              <div className="text-gray-600">
                Integrity · Quality · Commitment · Innovation · Customer Care
              </div>
            </div>
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2">Our Mission</div>
              <div className="text-gray-600">
                To promote agroecological standards and rural entrepreneurship
                via potential development and exchange of pleasant
                farmer-to-agent feedback.
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Our Vision</div>
              <div className="text-gray-600">
                To break down the economic contribution and vulnerability to
                poverty, and to enhance livelihoods by producing high-yielding,
                nutritious mushroom cultivation.
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full h-auto"
            src="./images/mush.jpeg"
            alt="Mushroom cultivation"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutComp;
