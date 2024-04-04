import React from "react";
import {
  ContactUsButton,
  Content,
  NameStyle2,
  NameStyle1,
  Service,
  Title,
  Wrapper,
} from "./CleaningServices.styles";

const laundry = require("../../images/disinfecting-home.jpg");

const CleaningServices = ({ setDisplay, setMessageTitle }) => {
  const myfunction = (event) => {
    var element = event.target;
    while (element.className.search(/cleaning_service/) === -1) {
      element = element.parentNode;
    }
    setDisplay("block");
    setMessageTitle(
      "I NEED " + element.childNodes[0].innerHTML.toUpperCase() + "\n\n"
    );
  };

  // use box-shadows!
  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>CLEANING</h2>
      </Title>
      <Content>
        <Service>
          <NameStyle1 className="cleaning_service" onClick={myfunction}>
            <h1>Home and Office Cleaning</h1>
          </NameStyle1>
          <NameStyle2 className="cleaning_service" onClick={myfunction}>
            <h1>Post-Construction and Industrial cleaning </h1>
          </NameStyle2>
          <NameStyle1 className="cleaning_service" onClick={myfunction}>
            <h1>Before and After-party cleaning</h1>
          </NameStyle1>
          <NameStyle2 className="cleaning_service" onClick={myfunction}>
            <h1>Carpet and Upholstery cleaning </h1>
          </NameStyle2>
          <NameStyle1 className="cleaning_service" onClick={myfunction}>
            <h1>Fumigation and Pest control</h1>
          </NameStyle1>
        </Service>
      </Content>
      <ContactUsButton href="/contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default CleaningServices;
