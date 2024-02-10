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
import { Link } from "react-router-dom";

const tools = require("../../images/hands-holding-cleaning-tools-solutions.jpg");

const CleaningProductsCategories = ({ setDisplay, setMessageTitle }) => {
  const myfunction = (event) => {
    var element = event.target;
    while (element.className.search(/cleaning_product/) === -1) {
      element = element.parentNode;
    }
    setDisplay("block");
    setMessageTitle(
      "I NEED " + element.childNodes[0].innerHTML.toUpperCase() + "\n\n"
    );
  };
  return (
    <Wrapper pic={tools}>
      <Title>
        <h2>CLEANING</h2>
      </Title>
      <Content>
        <Service>
          <NameStyle1 className="cleaning_product" onClick={myfunction}>
            <h1>Basic Cleaning Products</h1>
          </NameStyle1>
          <NameStyle2 className="cleaning_product" onClick={myfunction}>
            <h1>Cleaning Chemicals </h1>
          </NameStyle2>
          <NameStyle1 className="cleaning_product" onClick={myfunction}>
            <h1>Essential Cleaning Tools</h1>
          </NameStyle1>
          <NameStyle2 className="cleaning_product" href="./cleaningmachines">
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
