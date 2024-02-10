import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactUsButton,
  Content,
  Form,
  Title,
  Wrapper,
  Menu,
  List,
} from "./MyAccount.styles";

import API from "../../API";
import { Context } from "../../context";

const getCurrentUserDetails = async (user, setAccountDetails, navigate) => {
  try {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    if (token) {
      const res = await API.fetchCurrentUserDetails({
        token: token,
        id: id,
      });
      if (res.ok) {
        const account = await res.json();
        setAccountDetails(
          <List>
            <tr>
              {Object.keys(account) ? (
                Object.keys(account).map((key) => <th>{key}</th>)
              ) : (
                <th>No data</th>
              )}
            </tr>

            <tr>
              {Object.keys(account) ? (
                Object.keys(account).map((key) => <td>{account[key]}</td>)
              ) : (
                <td>No data</td>
              )}
            </tr>
          </List>
        );
      } else {
        navigate("/rhoxklin/login");
      }
    } else {
      navigate("/rhoxklin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const getMessages = async (setAccountDetails, navigate) => {
  try {
    const token = sessionStorage.getItem("token");
    if (token) {
      const res = await API.fetchMessages({
        token: token,
      });
      if (res.ok) {
        const messages = await res.json();
        setAccountDetails(
          <>
            {messages.length > 0 ? (
              <List>
                <tr>
                  {Object.keys(messages[0]) ? (
                    Object.keys(messages[0]).map((key) => <th>{key}</th>)
                  ) : (
                    <th>No data</th>
                  )}
                </tr>
                {messages.map((entry) => (
                  <tr>
                    {Object.keys(entry) ? (
                      Object.keys(entry).map((key) => <td>{entry[key]}</td>)
                    ) : (
                      <td>No data</td>
                    )}
                  </tr>
                ))}
              </List>
            ) : (
              <table></table>
            )}
          </>
        );
      } else {
        navigate("/rhoxklin/login");
      }
    } else {
      navigate("/rhoxklin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const GetCustomers = async (setAccountDetails, navigate) => {
  const [customers, setCustomers] = useState([]);
  try {
    const token = sessionStorage.getItem("token");
    if (token) {
      const res = await API.fetchCustomers({
        token: token,
      });
      if (res.ok) {
        const data = await res.json();
        setCustomers(data);
      } else {
        navigate("/rhoxklin/login");
      }
    } else {
      navigate("/rhoxklin/login");
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {customers.length > 0 ? (
        <List>
          <tr>
            {Object.keys(customers[0]) ? (
              Object.keys(customers[0]).map((key) => <th>{key}</th>)
            ) : (
              <th>No data</th>
            )}
          </tr>
          {customers.map((entry) => (
            <tr>
              {Object.keys(entry) ? (
                Object.keys(entry).map((key) => <td>{entry[key]}</td>)
              ) : (
                <td>No data</td>
              )}
            </tr>
          ))}
        </List>
      ) : (
        <table></table>
      )}
    </>
  );
};

const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(Context);
  const [accountDetails, setAccountDetails] = useState();
  const [customers, setCustomers] = useState(false);
  const [staffs, setStaffs] = useState([]);
  const [cleaningMachines, setCleaningMachines] = useState([]);

  return (
    <Wrapper>
      <Title>
        <h2>My Account</h2>
      </Title>
      <Content>
        <Menu>
          <button
            onClick={() => {
              getCurrentUserDetails(user, setAccountDetails, navigate);
            }}
          >
            <span>Account Details </span>
          </button>
          <button
            onClick={() => {
              getMessages(setAccountDetails, navigate);
            }}
          >
            <span>Messages </span>
          </button>
          <button
            onClick={() => {
              setCustomers(true);
            }}
          >
            <span>Customers </span>
          </button>
          <button>
            <span>Staffs </span>
          </button>
          <button>
            <span>Cleaning Machines </span>
          </button>
        </Menu>
        {accountDetails}
      </Content>
      <ContactUsButton href="./contactus">
        <h2>CONTACT US</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default MyAccount;
