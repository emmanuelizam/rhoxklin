import React from "react";
import {
  ContactUsButton,
  Content,
  NameStyle2,
  NameStyle1,
  Service,
  Title,
  Wrapper,
} from "./CleaningProductsCategories.styles";

const tools = require("../../images/hands-holding-cleaning-tools-solutions.jpg");

const CleaningProductsCategories = () => {
  return (
    <Wrapper pic={tools}>
      <Title>
        <h2>CLEANING</h2>
      </Title>
      <Content>
        <Service>
          <NameStyle1>
            <h1>Basic Cleaning Products</h1>
          </NameStyle1>
          <NameStyle2>
            <h1>Cleaning Chemicals </h1>
          </NameStyle2>
          <NameStyle1>
            <h1>Essential Cleaning Tools</h1>
          </NameStyle1>
          <NameStyle2>
            <h1>Cleaning Machines </h1>
          </NameStyle2>
        </Service>
      </Content>
      <ContactUsButton href="./contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default CleaningProductsCategories;
