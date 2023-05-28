import { React } from "react";
import cart from "../../images/shopping_cart.png";

import {
  Wrapper,
  Content,
  Bar,
  LogoImg,
  NavigationContent,
  Home,
  Services,
  ContactUs,
  SignIn,
  Cart,
} from "./Header.styles";

const logo = require("../../images/logo_new21.png");

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={logo} alt="Logo"></LogoImg>
        <Bar></Bar>
        <NavigationContent>
          <Home>
            <h3>Home</h3>
          </Home>
          <Services>
            <h3>Services</h3>
          </Services>
          <ContactUs>
            <h3>Contact Us</h3>
          </ContactUs>
          <SignIn>
            <h3>Sign In</h3>
          </SignIn>
          <Cart cart={cart}>
            <div>
              <h3>1000</h3>
            </div>
          </Cart>
        </NavigationContent>
      </Content>
    </Wrapper>
  );
};

export default Header;
