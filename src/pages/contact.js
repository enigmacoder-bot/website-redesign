import "../index.css";
import Nav from "../components/nav";
import React from "react";
import Weoffer from "../components/weoffer";
import Form from "../components/Form";
import Foter from "../components/foter";
function Contact(props) {
  return (
    <div>
      <Nav val="india" ved="1" />
      <Weoffer val={props.val} ved="3" />
      <Form />
      <Foter cor={false} />
    </div>
  );
}

export default Contact;
