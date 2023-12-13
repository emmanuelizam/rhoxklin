import React from "react";
import {
  Wrapper,
  Content,
  Title,
  Contacts,
  Rights,
  Services,
  ServicesContacts,
  Bar,
  Tooltip,
} from "./Footer.styles";
import Facebook from "../../images/icon-facebook.svg";
import WhatsApp from "../../images/icon-whatsapp.svg";
import Twitter from "../../images/icon-twitter.svg";
import Instagram from "../../images/icon-instagram.svg";
import Mail from "../../images/icon-email.svg";

import Call from "../../images/icons-call.svg";
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
              <a href="/rhoxklin/laundry">Laundry</a>
            </h2>
            <h2>
              <a href="/rhoxklin/cleaning">Cleaning</a>
            </h2>
            <h2>
              <a href="/rhoxklin/cleaningproductscategories">
                Cleaning Products
              </a>
            </h2>
            <h2>
              <a href="/rhoxklin/artworks">Art Works</a>
            </h2>
            <h2>
              <a href="/rhoxklin/pickupanddelivery">Pick-up and delivery</a>
            </h2>
            <h2>
              <a href="/rhoxklin/contactus">Contact Us</a>
            </h2>
          </Services>
          <Bar />
          <Contacts>
            <a
              href="https://web.facebook.com/Rhoxklin/"
              title="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://wa.me/2348105054701?text=hello"
              title="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsApp} alt="WhatsApp" />
            </a>
            <a
              href="https://www.twitter.com/rhoxklin"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/rhoxklin/"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="mailto:rhoxklin@gmail.com"
              title="Email"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Mail} alt="Mail" />
            </a>

            <a
              href="tel:+2348105054701"
              title="+2348105054701"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Call} alt="+2348105054701"></img>
            </a>
            <a
              href="geo:25.245470718844146,51.45400942457904"
              title="No. 5 Ugbomanta Street"
              target="_blank"
              rel="noreferrer"
            >
              <a
                href="geo:25.245470718844146,51.45400942457904"
                title="No. 5 Ugbomanta Street"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Office} alt="No. 5 Ugbomanta Street"></img>
              </a>
            </a>
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
