import React, { useEffect, useState } from "react";
import {
  Content,
  Title,
  Wrapper,
  CloseButton,
} from "./ContactUsModal.styles.js";

const laundry = require("../../images/disinfecting-home.jpg");

const ContactUsModal = ({
  display,
  setDisplay,
  messageTitle,
  setMessageTitle,
}) => {
  const [count, setCount] = useState(0);

  function myfunction(event) {
    setDisplay("none");
    setMessageTitle("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`the text entered was ${messageTitle}`);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/staffcustomermessage")
      .then((response) => {
        if (response.ok) {
          console.log("response was OK");
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("here is your data");
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setCount((count) => (count = count + 1));
        console.log(`we have updated ${count} times`);
      });
  }, [display]);

  return (
    <Wrapper display={display}>
      <CloseButton title="close">
        <h1 onClick={myfunction}>X</h1>
      </CloseButton>
      <Title>
        <h2>MAKE YOUR ORDER!</h2>
      </Title>
      <Content>
        <form method="POST" action="/contactus" onSubmit={handleSubmit}>
          <textarea
            name="customer_message"
            id="customer_message"
            spellCheck={true}
            required={true}
            onChange={(e) => {
              setMessageTitle(e.target.value);
            }}
            value={messageTitle}
            autoFocus={display === "block" ? true : false}
          ></textarea>
          <input
            type="text"
            placeholder="your surname"
            name="customer_surname"
            required={true}
          ></input>
          <input
            type="text"
            placeholder="your firstname"
            name="customer_firstname"
          ></input>
          <input
            type="tel"
            placeholder="your phone number"
            name="customer_tel"
            required={true}
          ></input>
          <input
            type="email"
            placeholder="your email"
            name="customer_email"
          ></input>
          <input type="submit" value="SEND"></input>
        </form>
      </Content>
    </Wrapper>
  );
};

export default ContactUsModal;
