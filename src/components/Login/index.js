import React from "react";
import { ContactUsButton, Content, Title, Wrapper } from "./Login.styles";

const laundry = require("../../images/washed_garments.jpg");

const Login = () => {
  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>LOGIN</h2>
      </Title>
      <Content>
        <form method="post">
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Email"
            required="required"
          ></input>
          <input
            type="button"
            name="usernameSwitch"
            id="usernameSwitch"
            value="or phone number"
          ></input>
          <br />
          <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required="required"
            minLength="8"
          ></input>
          <input
            type="button"
            name="forgotPassword"
            id="forgotPassword"
            value="forgot password?"
          ></input>
          <br />
          <br />

          <input type="submit" name="login" id="login" value="Login"></input>
          <input
            type="button"
            name="noAccount"
            id="noAccount"
            value="Don't have an account?"
          ></input>
        </form>
      </Content>
      <ContactUsButton href="./contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default Login;
