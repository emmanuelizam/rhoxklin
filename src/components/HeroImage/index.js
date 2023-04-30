import React from "react";
import Hero from "../../images/rhoxklin_mockup1.png";
import { Wrapper, Content } from "./HeroImage.styles";

const HeroImage = () => {
  return (
    <Wrapper Hero={Hero}>
      <Content>
        <h1>Master Cleaners</h1>
        <h2>
          We offer a full range of cleaning and general sanitation services that
          are adaptable, affordable, and budget friendly.
        </h2>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
