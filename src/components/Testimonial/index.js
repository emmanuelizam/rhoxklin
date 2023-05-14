import React from "react";
import {
  Wrapper,
  Content,
  Testimony,
  LeftArrow,
  RightArrow,
  Title,
  Scroll,
} from "./Testimonial.styles";
import testimonee from "../../images/black woman1.jpg";

export const Testimonial = () => {
  return (
    <Wrapper>
      <Title>
        <h2>TESTIMONIALS</h2>
      </Title>
      <Content>
        <LeftArrow></LeftArrow>
        <Testimony>
          <img src={testimonee} alt="Testimonee"></img>
          <div>
            <p>
              Aequalis acervo silvas pugnabant corpore mundi secrevit concordi
              nitidis premuntur praeter surgere pressa bracchia retinebat otia
              siccis carentem secant cinxit undae tonitrua semina stagna
              praebebat montibus illic mentes recepta levius quanto umentia
              secant lucis otia mundi hunc coercuit temperiemque illic foret
              addidit tempora poena os.
            </p>
          </div>
        </Testimony>
        <RightArrow></RightArrow>
      </Content>
      <Scroll>
        <div></div>
        <div></div>
        <div></div>
      </Scroll>
    </Wrapper>
  );
};
