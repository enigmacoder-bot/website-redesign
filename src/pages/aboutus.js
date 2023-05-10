import "../App.css";
import Nav from "../components/nav";
import React from "react";
import Weoffer from "../components/weoffer";
import Wegrow from "../components/wegrow";
import AboutComp from "../components/aboutcomp";
import Foter from "../components/foter";
function About(props) {
  return (
    <div>
      <Nav val="india" ved="1" />
      <Weoffer val={props.val} ved="1" />
      {/* <Wegrow val="india" ved="1"/> */}
      <AboutComp />
      <Foter cor={true} />
    </div>
  );
}

export default About;
