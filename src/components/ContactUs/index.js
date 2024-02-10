import { React, useState } from "react";
import { Content, Title, Wrapper } from "./ContactUs.styles.js";

const laundry = require("../../images/disinfecting-home.jpg");

const ContactUs = () => {
  const [customerMessage, setCustomerMessage] = useState({});
  const [messageSendSuccessfully, setMessageSendSuccessfully] = useState(false);

  const getDateTime = () => {
    var d = new Date(Date.now());
    return `${d.getFullYear()}-${
      d.getMonth() + 1
    }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;
  };

  function handleSubmit(event) {
    event.preventDefault();

    const message = {
      StaffId: 1,
      CustomerId: 1,
      senderIsCustomer: true,
      content: `${customerMessage.customer_message}\nName: ${customerMessage.customer_surname} ${customerMessage.customer_firstname}\nPhoneNumber: ${customerMessage.customer_tel}\nEmail: ${customerMessage.customer_email}`,
      dateSend: getDateTime(),
    };

    fetch("http://localhost:5000/api/staffcustomermessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((response) => response.json())
      .then((data) =>
        data.message === "success"
          ? setMessageSendSuccessfully(true)
          : setMessageSendSuccessfully(false)
      )
      .catch((error) => console.log(error));
  }

  function handleChange(event) {
    setCustomerMessage({
      ...customerMessage,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Wrapper pic={laundry}>
      <Title>
        <h2>TYPE YOUR MESSAGE</h2>
      </Title>
      <Content>
        {messageSendSuccessfully ? (
          <h1>Message send successfully!</h1>
        ) : (
          <form
            method="POST"
            action="http://localhost:5000/api/staffcustomermessage"
            onSubmit={handleSubmit}
          >
            <textarea
              name="customer_message"
              id="customer_message"
              spellCheck={true}
              required={true}
              onChange={handleChange}
              value={customerMessage.message}
              autoFocus={true}
            ></textarea>
            <div>
              <input
                type="text"
                placeholder="your surname"
                name="customer_surname"
                value={customerMessage.surname}
                required={true}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="your firstname"
                name="customer_firstname"
                value={customerMessage.firstname}
                onChange={handleChange}
              ></input>
              <input
                type="tel"
                placeholder="your phone number"
                name="customer_tel"
                required={true}
                value={customerMessage.tel}
                onChange={handleChange}
              ></input>
              <input
                type="email"
                placeholder="your email"
                name="customer_email"
                value={customerMessage.email}
                onChange={handleChange}
              ></input>
              <input type="submit" value="SEND"></input>
            </div>
          </form>
        )}
      </Content>
    </Wrapper>
  );
};

export default ContactUs;
