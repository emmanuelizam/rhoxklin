import React from "react";
import {
  Wrapper,
  Content,
  Title,
  Laundry,
  Cleaning,
  CleaningProducts,
  ArtWorks,
  PickUpAndDelivery,
  ContactUs,
} from "./Services.styles";
const laundry = require("../../images/washed_garments.jpg");
const cleaning = require("../../images/disinfecting-home.jpg");
const cleaningProducts = require("../../images/hands-holding-cleaning-tools-solutions.jpg");

const Services = () => {
  return (
    <Wrapper>
      <Title>
        <h2>SERVICES</h2>
      </Title>
      <Content>
        <Laundry>
          <img src={laundry} alt="laundry"></img>
          <div>
            <h3>Laundry</h3>
          </div>
        </Laundry>
        <Cleaning>
          <div>
            <h3>Cleaning</h3>
          </div>
          <img src={cleaning} alt="cleaning"></img>
        </Cleaning>
        <CleaningProducts>
          <img src={cleaningProducts} alt="cleaning products"></img>
          <div>
            <h3>Cleaning Products</h3>
          </div>
        </CleaningProducts>
        <ArtWorks>
          <div>
            <h3>Art Works</h3>
          </div>
          <img src={cleaning} alt="cleaning"></img>
        </ArtWorks>
        <PickUpAndDelivery>
          <img src={laundry} alt="pick up and delivery"></img>
          <div>
            <h3>Pick-Up and Delivery</h3>
          </div>
        </PickUpAndDelivery>
      </Content>
      <ContactUs>
        <h2>Contact Us Now</h2>
      </ContactUs>
    </Wrapper>
  );
};

export default Services;
