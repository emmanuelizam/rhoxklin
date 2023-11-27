import React from "react";
import {
  ContactUsButton,
  Content,
  Description,
  Name,
  Service,
  Title,
  Wrapper,
} from "./LaundryServices.styles";

const laundry = require("../../images/washed_garments.jpg");

const LaundryServices = () => {
  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>LAUNDRY</h2>
      </Title>
      <Content>
        <Service>
          <Name>
            <h1>Standard Service:</h1>
          </Name>
          <Description>
            <h3>
              Your laundry will be ready for collection within 3 to 4 days
            </h3>
          </Description>
        </Service>
        <Service>
          <Name>
            <h1>Express Service:</h1>
          </Name>
          <Description>
            <h3>
              Your Laundry will be ready for collection within 40 to 48 hours
            </h3>
          </Description>
        </Service>
        <Service>
          <Name>
            <h1>Super Express Service:</h1>
          </Name>
          <Description>
            <h3>
              Your laundry will be ready for collection within 15 to 24 hours
            </h3>
          </Description>
        </Service>
        <Service>
          <Name>
            <h1>Alteration Service:</h1>
          </Name>
          <Description>
            <h3>
              We have a team of experienced, professional, and high class
              seamtress and tailors who have the ability to provide fascinating
              stitching, sewing, and alteration services including:
              <ul>
                <li>Clothes Fittting and Adjustment</li>
                <li>Clothes Mending and Sewing</li>
                <li>Zip and buttons replacement</li>
              </ul>
            </h3>
          </Description>
        </Service>
      </Content>
      <ContactUsButton href="./contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default LaundryServices;
