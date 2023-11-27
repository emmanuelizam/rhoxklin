import React from "react";
import { Content, Title, Wrapper } from "./ContactUs.styles.js";

const laundry = require("../../images/disinfecting-home.jpg");

const ContactUs = () => {
  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>LET'S HEAR FROM YOU</h2>
      </Title>
      <Content>
        <form method="post" action="/">
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

export default ContactUs;
