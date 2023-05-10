import Nav from "../components/nav";
import "../index.css";
import Top from "../components/top";
import React from "react";
import Weoffer from "../components/weoffer";
import Wegrow from "../components/wegrow";
import Aboutus from "../components/aboutus";
import Foter from "../components/foter";
import Greet from "../components/navbar";

function Home(props) {
  return (
    <div>
      {/* <Nav/> */}
      <Greet />
      <Top val="india" ved="1" />

      <Weoffer val={props.val} ved="1" />
      <Wegrow val="india" />
      <Aboutus val="india" ved="1" />
      <Foter cor={true} ved="1" />
    </div>
  );
}

export default Home;
