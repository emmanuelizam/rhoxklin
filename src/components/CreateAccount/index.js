import React from "react";
import {
  ContactUsButton,
  Content,
  Title,
  Wrapper,
} from "./CreateAccount.styles";

const CreateAccount = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Create Account</h2>
      </Title>
      <Content>
        <form method="post">
          <label for="firstname">First name: </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            required="required"
          ></input>
          <br />
          <label for="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Enter your surname"
            required="required"
          ></input>
          <br />
          <label for="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phone number"
            required="required"
          ></input>
          <br />
          <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            required="required"
          ></input>

          <br />
          <label for="address">Address: </label>
          <input
            type="address"
            name="address"
            id="address"
            placeholder="Enter your Address"
            required="required"
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
          <br />
          <label for="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            required="required"
            minLength="8"
          ></input>
          <br />
          <br />
          <input
            type="submit"
            name="login"
            id="login"
            value="Create Account"
          ></input>
          <a href="/login">Already have an account? Login instead.</a>
        </form>
      </Content>
      <ContactUsButton href="./contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default CreateAccount;
