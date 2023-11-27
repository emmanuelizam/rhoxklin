import React, { useState } from "react";
import {
  Content,
  Title,
  Wrapper,
  CloseButton,
} from "./ContactUsModal.styles.js";

const laundry = require("../../images/disinfecting-home.jpg");

const ContactUsModal = () => {
  const [display, setDisplay] = useState("none");
  function myfunction() {
    setDisplay("none");
  }
  return (
    <Wrapper display={display}>
      <CloseButton title="close" onClick={myfunction}>
        <h1>X</h1>
      </CloseButton>
      <Title>
        <h2>LET'S HEAR FROM YOU</h2>
      </Title>
      <Content>
        <form method="post" action="/contactus">
          <textarea
            name="customer_message"
            id="customer_message"
            spellCheck="true"
            placeholder="type your message here"
            required="true"
          ></textarea>
          <input
            type="text"
            placeholder="your surname"
            name="customer_surname"
            required="true"
          ></input>
          <input
            type="text"
            placeholder="your firstname"
            name="customer_firstname"
          ></input>
          <input
            type="tel"
            placeholder="your phone number"
            name="customer_tel"
            required="true"
          ></input>
          <input
            type="email"
            placeholder="your email"
            name="customer_email"
          ></input>
          <input type="submit" value="SEND"></input>
        </form>
      </Content>
    </Wrapper>
  );
};

export default ContactUsModal;
