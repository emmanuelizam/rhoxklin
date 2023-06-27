import React from "react";
import {
  ContactUs,
  Content,
  NameStyle2,
  NameStyle1,
  Service,
  Title,
  Wrapper,
} from "./CleaningServices.styles";

const laundry = require("../../images/disinfecting-home.jpg");

const ContactUs = () => {
  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>CLEANING</h2>
      </Title>
      <Content>
        <Service>
          <NameStyle1>
            <h1>Home and Office Cleaning</h1>
          </NameStyle1>
          <NameStyle2>
            <h1>Post-Construction and Industrial cleaning </h1>
          </NameStyle2>
          <NameStyle1>
            <h1>Before and After-party cleaning</h1>
          </NameStyle1>
          <NameStyle2>
            <h1>Carpet and Upholstery cleaning </h1>
          </NameStyle2>
          <NameStyle1>
            <h1>Fumigation and Pest control</h1>
          </NameStyle1>
        </Service>
      </Content>
      <ContactUs>
        <h2>CONTACT US</h2>
      </ContactUs>
    </Wrapper>
  );
};

export default ContactUs;
