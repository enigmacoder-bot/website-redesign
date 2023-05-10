import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
function Top(props) {
  return (
    <section id="top" className="md:flex md:justify-between md:items-center">
      <div className="tagline md:w-1/2">
        <div className="titlebox">
          <div className="cname">prafal agro</div>
          <div className="tag">
            Empowering <br /> Rural Economy <br />
            Through Mushroom Cultivation
          </div>
          <Link className="link" to="/about">
            <div className="learn">
              <em>Learn more</em>
            </div>
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 md:flex md:justify-center md:items-center">
        <img
          className="headimg md:w-4/5 mx-10 my-10"
          src="./images/mush2.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Top;
