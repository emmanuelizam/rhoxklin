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
  ContactUsButton,
} from "./Services.styles";
const laundry = require("../../images/washed_garments.jpg");
const cleaning = require("../../images/disinfecting-home.jpg");
const cleaningProducts = require("../../images/hands-holding-cleaning-tools-solutions.jpg");

const Services = () => {
  return (
    <Wrapper>
      <Title id="services">
        <h2>SERVICES</h2>
      </Title>
      <Content>
        <Laundry>
          <a href="/laundry">
            <img src={laundry} alt="laundry"></img>
            <div>
              <h3>Laundry</h3>
            </div>
          </a>
        </Laundry>

        <Cleaning>
          <a href="/cleaning">
            <div>
              <h3>Cleaning</h3>
            </div>
            <img src={cleaning} alt="cleaning"></img>
          </a>
        </Cleaning>
        <CleaningProducts>
          <a href="/cleaningproductscategories">
            <img src={cleaningProducts} alt="cleaning products"></img>
            <div>
              <h3>Cleaning Products</h3>
            </div>
          </a>
        </CleaningProducts>
        <ArtWorks>
          <a href="/artworks">
            <div>
              <h3>Art Works</h3>
            </div>
            <img src={cleaning} alt="cleaning"></img>
          </a>
        </ArtWorks>
        <PickUpAndDelivery>
          <a href="/pickupanddelivery">
            <img src={laundry} alt="pick up and delivery"></img>
            <div>
              <h3>Pick-Up and Delivery</h3>
            </div>
          </a>
        </PickUpAndDelivery>
      </Content>
      <ContactUsButton href="./contactus">
        <h2>Contact Us Now</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default Services;
