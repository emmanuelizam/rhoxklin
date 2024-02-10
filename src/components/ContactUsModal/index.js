import React, { useState } from "react";
import {
  Content,
  Title,
  Wrapper,
  CloseButton,
} from "./ContactUsModal.styles.js";
import API from "../../API.js";
import Utils from "../../Utils.js";

const ContactUsModal = ({
  display,
  setDisplay,
  messageTitle,
  setMessageTitle,
}) => {
  const [customerMessage, setCustomerMessage] = useState({});
  const [messageSendSuccessfully, setMessageSendSuccessfully] = useState(false);

  function closeModalView(event) {
    setDisplay("none");
    setMessageTitle("");
    setMessageSendSuccessfully(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const message = {
      StaffId: 1,
      CustomerId: 1,
      senderIsCustomer: true,
      content:
        messageTitle +
        `\nName: ${customerMessage.customer_surname} ${customerMessage.customer_firstname}\nPhoneNumber: ${customerMessage.customer_tel}\nEmail: ${customerMessage.customer_email}`,
      dateSend: Utils.getDateTime(),
    };

    try {
      const res = await API.postMessage(message);
      res
        .json()
        .then((data) => {
          data.id
            ? setMessageSendSuccessfully(true)
            : setMessageSendSuccessfully(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setCustomerMessage({
      ...customerMessage,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Wrapper display={display}>
      <Content>
        {messageSendSuccessfully ? (
          <>
            <CloseButton title="close">
              <h1 onClick={closeModalView}>X</h1>
            </CloseButton>
            <h1>send successfully!</h1>
          </>
        ) : (
          <>
            <CloseButton title="close">
              <h1 onClick={closeModalView}>X</h1>
            </CloseButton>
            <Title>
              <h2>MAKE YOUR ORDER!</h2>
            </Title>
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
                onChange={(e) => {
                  setMessageTitle(e.target.value);
                }}
                value={messageTitle}
                autoFocus={display === "block" ? true : false}
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
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default ContactUsModal;
