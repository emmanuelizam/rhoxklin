import { React, useContext, useEffect, useState } from "react";
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
import { Context } from "../../context";
import API from "../../API";

const logo = require("../../images/logo.png");

const Header = () => {
  const [state, setstate, cartNumber, setCartNumber] = useContext(Context);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const resp = await API.fetchCartItems();
        if (resp.ok) {
          resp
            .json()
            .then((value) => {
              setCartNumber(value.length);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    getCartItems();
  }, []);

  return (
    <Wrapper>
      <Content>
        <LogoImg src={logo} alt="Logo"></LogoImg>
        <Bar></Bar>
        <NavigationContent>
          <Home href="/rhoxklin/">
            <h3>Home</h3>
          </Home>
          <Services href="#services">
            <h3>Services</h3>
          </Services>
          <ContactUsHeader href="/rhoxklin/contactus">
            <h3>Contact Us</h3>
          </ContactUsHeader>
          <SignIn href="/rhoxklin/login">
            <h3>Log In</h3>
          </SignIn>
          <Cart cart={cart} href="/rhoxklin/cart">
            <img src={cart} alt="cart"></img>
            <span>{cartNumber}</span>
          </Cart>
        </NavigationContent>
      </Content>
    </Wrapper>
  );
};

export default Header;
