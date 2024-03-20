import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactUsButton, Content, Title, Wrapper } from "./Login.styles";
import { Context } from "../../context";

import API from "../../API";

const laundry = require("../../images/washed_garments.jpg");

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});
  const [error, setError] = useState(false);

  const [state, setstate, localCart, setLocalCart] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      const credentials = {
        username: loginDetails.usernameEmail || loginDetails.usernameTel,
        password: loginDetails.password,
      };
      const res = await API.authenticate(credentials);
      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("id", data.user.id);
        setstate(data);
        navigate("/rhoxklin/myaccount");
      } else {
        return <h1>Something went wrong</h1>;
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const temp = { ...loginDetails, [e.target.name]: e.target.value };
    setLoginDetails(temp);
  };
  return (
    <Wrapper pic={laundry}>
      {error && <div>wrong username or password</div>}
      <Title>
        <h2>LOGIN</h2>
      </Title>
      <Content>
        <form method="post" onSubmit={handleSubmit}>
          <label for="usernameEmail">Username: </label>
          <input
            type="text"
            name="usernameEmail"
            className="username"
            placeholder="Enter your Email"
            onChange={handleChange}
            value={loginDetails.usernameEmail}
          ></input>
          <label for="usernameTel">OR: </label>
          <input
            type="tel"
            name="usernameTel"
            className="username"
            placeholder="Enter phone number"
            onChange={handleChange}
            value={loginDetails.usernameTel}
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
            onChange={handleChange}
            value={loginDetails.password}
          ></input>
          <a href="/rhoxklin/contactus" id="forgotPassword">
            forgot password?
          </a>
          <br />
          <br />

          <input type="submit" name="login" id="login" value="Login"></input>
          <a href="/rhoxklin/createaccount">"Don't have an account?"</a>
        </form>
      </Content>
      <ContactUsButton href="./contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default Login;
