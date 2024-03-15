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
  Table,
} from "./MyAccount.styles";

import API from "../../API";
import { Context } from "../../context";

const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("id");
        if (token) {
          var res = null;
          if (selectedItem === "account") {
            res = await API.fetchCurrentUserDetails({
              token: token,
              id: id,
            });
          } else if (selectedItem === "messages") {
            res = await API.fetchMessages({
              token: token,
            });
          } else if (selectedItem === "customers") {
            res = await API.fetchCustomers({
              token: token,
            });
          } else if (selectedItem === "staffs") {
            res = await API.fetchStaffs({
              token: token,
            });
          } else if (selectedItem === "machines") {
            res = await API.fetchCleaningMachines({
              token: token,
            });
          }
          if (res.ok) {
            const data = await res.json();
            selectedItem !== "account"
              ? setTableData(data)
              : setTableData([data]);
          } else {
            navigate("/rhoxklin/login");
          }
        } else {
          navigate("/rhoxklin/login");
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [selectedItem]);

  return (
    <Wrapper id="main">
      <Content>
        <Menu>
          <button
            onClick={() => {
              setSelectedItem("account");
            }}
          >
            <span>Account Details </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("messages");
            }}
          >
            <span>Messages </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("customers");
            }}
          >
            <span>Customers </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("staffs");
            }}
          >
            <span>Staffs </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("machines");
            }}
          >
            <span>Cleaning Machines </span>
          </button>
        </Menu>
        {tableData.length > 0 ? (
          <List>
            <Table>
              <tr>
                {Object.keys(tableData[0]) ? (
                  Object.keys(tableData[0]).map((key) => <th>{key}</th>)
                ) : (
                  <th>No data</th>
                )}
              </tr>
              {tableData.map((entry) => (
                <tr
                  onClick={() => {
                    var elt = document.querySelector("#modal");
                    elt.style.display = "block";
                    setFormData(entry);
                  }}
                >
                  {Object.keys(entry) ? (
                    Object.keys(entry).map((key) => <td>{entry[key]}</td>)
                  ) : (
                    <td>No data</td>
                  )}
                </tr>
              ))}
            </Table>
          </List>
        ) : (
          <Table></Table>
        )}
      </Content>
      <div id="modal">
        <button
          onClick={(events) => {
            var elt = document.querySelector("#modal");
            elt.style.display = "none";
          }}
        >
          X
        </button>
        <Form>
          {Object.keys(formData) ? (
            Object.keys(formData).map((key) => (
              <>
                <label>{key}</label>
              </>
            ))
          ) : (
            <h1>no data</h1>
          )}
          <input type="button"></input>
          <input type="submit"></input>
        </Form>
      </div>
    </Wrapper>
  );
};

export default MyAccount;
