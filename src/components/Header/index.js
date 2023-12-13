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
  ContactUsHeader,
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
          <Home href="/">
            <h3>Home</h3>
          </Home>
          <Services href="#services">
            <h3>Services</h3>
          </Services>
          <ContactUsHeader href="/contactus">
            <h3>Contact Us</h3>
          </ContactUsHeader>
          <SignIn href="/login">
            <h3>Log In</h3>
          </SignIn>
          <Cart cart={cart} href="/cart">
            <img src={cart} alt="cart"></img>
            <span>10</span>
          </Cart>
        </NavigationContent>
      </Content>
    </Wrapper>
  );
};

export default Header;
