import React from "react";
import {
  Wrapper,
  Content,
  Title,
  Contacts,
  Rights,
  Services,
  ServicesContacts,
  Bar
} from "./Footer.styles";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Instagram from "../../images/icon-instagram.svg";
import Mail from "../../images/icon-email.svg";

import Call  from "../../images/icons-call.svg";
import Office from "../../images/icons-business-building.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <h2>
            <i>Rhoxklin</i>
          </h2>
        </Title>
        <ServicesContacts>
          <Services>
            <h2>
              <a href="www.faceboook.com">Laundry</a>
            </h2>
            <h2>
              <a href="www.twitter.com">Cleaning</a>
            </h2>
            <h2>
              <a href="www.instgram.com">Cleaning Products</a>
            </h2>
            <h2>
              <a href="rhoxklin@gmail.com">Art Works</a>
            </h2>
            <h2>
              <a href="rhoxklin@gmail.com">Pick-up and delivery</a>
            </h2>
            <h2>
              <a href="rhoxklin@gmail.com">Contact Us</a>
            </h2>
          </Services>
          <Bar/>
          <Contacts>
              <a href="www.faceboook.com">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="www.twitter.com">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="www.instgram.com">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="rhoxklin@gmail.com">
                <img src={Mail} alt="Mail" />
              </a>

            <img src={Call} alt="05028992233"></img>
            <img src={Office} alt="No. 5 Ugbomanta Street"></img>
          </Contacts>
        </ServicesContacts>
        <Rights>
          <h2>2023 Rhoxlin. All rights reserved.</h2>
        </Rights>
      </Content>
    </Wrapper>
  );
};

export default Footer;
