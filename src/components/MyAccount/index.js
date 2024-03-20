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
  SearchAndAdd,
  Modal,
} from "./MyAccount.styles";

import API from "../../API";
import { Context } from "../../context";

const MyAccount = () => {
  const navigate = useNavigate();
  const [state, setstate, localCart, setLocalCart] = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [selectedItem, setSelectedItem] = useState("Staffs");
  const [selectedItems, setSelectedItems] = useState([]);
  const [deleteSelectedItems, setDeleteSelectedItems] = useState(false);
  const modelConstraint = {
    birthday: "Date",
    email: "email",
    password: "password",
    name: "text",
    role: "text",
    sex: "radio",
    description: "text",
    price: "number",
    phoneNumber: "tel",
  };
  const [models, setModels] = useState({
    Staffs: {
      name: null,
      birthday: null,
      sex: null,
      role: null,
      phoneNumber: null,
      email: null,
      password: null,
    },
    Customers: {
      name: null,
      birthday: null,
      sex: null,
      phoneNumber: null,
      email: null,
      password: null,
    },
    Products: {
      name: null,
      description: null,
      price: null,
    },
    Services: {
      name: null,
      description: null,
      price: null,
    },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = state.token;
        const id = state.user.id;
        if (token) {
          var res = null;
          if (selectedItem === "Account Details") {
            res = await API.fetchCurrentUserDetails({
              token: token,
              id: id,
            });
          } else if (selectedItem === "Messages") {
            res = await API.fetchMessages({
              token: token,
            });
          } else if (selectedItem === "Customers") {
            res = await API.fetchCustomers({
              token: token,
            });
          } else if (selectedItem === "Staffs") {
            res = await API.fetchStaffs({
              token: token,
            });
          } else if (selectedItem === "Products") {
            res = await API.fetchCleaningProducts({
              token: token,
            });
          }
          // AccountDetails comes like this {} while other come like this []
          // the code below tries to make AccountDetails compatible with others
          if (res.ok) {
            const data = await res.json();
            selectedItem !== "Account Details"
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

  useEffect(() => {
    try {
      const token = state.token;
      const id = state.user.id;
      const deleteItems = async () => {
        if (token) {
          if (selectedItem === "Account Details") {
            return await API.deleteCurrentUserDetails({
              token: token,
              id: id,
            });
          } else if (selectedItem === "Messages") {
            return await API.deleteMessages({
              token: token,
              selectedItems: selectedItems,
            });
          } else if (selectedItem === "Customers") {
            return await API.deleteCustomers({
              token: token,
              selectedItems: selectedItems,
            });
          } else if (selectedItem === "Staffs") {
            return await API.deleteStaffs({
              token: token,
              selectedItems: selectedItems,
            });
          } else if (selectedItem === "Products") {
            return await API.deleteCleaningProducts({
              token: token,
              selectedItems: selectedItems,
            });
          }
        }
      };
      if (deleteSelectedItems) {
        deleteItems().then((res) => {
          if (res.ok) {
            var temp = [];
            selectedItems.map(
              (id) => (temp = tableData.filter((data) => data.id === id))
            );
            setTableData([...temp]);
          }
          setDeleteSelectedItems(false);
          setSelectedItems([]);
        });
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }, [selectedItems, deleteSelectedItems]);

  return (
    <Wrapper id="main">
      <Content>
        <Menu>
          <button
            onClick={() => {
              setSelectedItem("Account Details");
            }}
          >
            <span>Account Details </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("Customers");
            }}
          >
            <span>Customers </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("Staffs");
            }}
          >
            <span>Staffs </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("Products");
            }}
          >
            <span>Products </span>
          </button>
          <button
            onClick={() => {
              setSelectedItem("Messages");
            }}
          >
            <span>Messages </span>
          </button>
        </Menu>
        {tableData.length > 0 ? (
          <>
            <Title>
              <h2>{selectedItem}</h2>
            </Title>
            <List>
              <SearchAndAdd>
                <button
                  onClick={(event) => {
                    if (
                      event.target.className !== ("checkbox" || "checkboxCell")
                    ) {
                      var elt = document.querySelector("#add");
                      elt.style.display = "block";
                    }
                  }}
                >
                  Add New Record
                </button>
                <button
                  onClick={(event) => {
                    setDeleteSelectedItems(true);
                  }}
                >
                  Delete Record
                </button>
                <input type="text" name="search" placeholder="search"></input>
              </SearchAndAdd>
              <div>
                <Table>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        onClick={(event) => {
                          var elts = document.querySelectorAll(".checkbox");
                          var items = [];
                          if (event.target.checked === true) {
                            for (var i = 0; i < elts.length; i++) {
                              elts[i].checked = true;
                              items.push(elts[i].parentNode.parentNode.id);
                            }
                            setSelectedItems(items);
                          } else {
                            elts.forEach((elt) => (elt.checked = false));
                          }
                        }}
                      ></input>
                    </th>
                    {Object.keys(tableData[0]) ? (
                      Object.keys(tableData[0]).map((key) => <th>{key}</th>)
                    ) : (
                      <th>No data</th>
                    )}
                  </tr>
                  {tableData.map((entry) => (
                    <tr
                      key={entry.id}
                      id={entry.id}
                      onClick={(event) => {
                        if (
                          event.target.className !==
                          ("checkbox" || "checkboxCell")
                        ) {
                          var elt = document.querySelector("#edit");
                          elt.style.display = "block";
                          setFormData(entry);
                        }
                      }}
                    >
                      <td className="checkboxCell">
                        <input
                          className="checkbox"
                          type="checkbox"
                          onClick={(event) => {
                            if (event.target.checked === true) {
                              setSelectedItems([
                                ...selectedItems,
                                event.target.parentNode.parentNode.id,
                              ]);
                            }
                          }}
                        ></input>
                      </td>
                      {Object.keys(entry) ? (
                        Object.keys(entry).map((key) => <td>{entry[key]}</td>)
                      ) : (
                        <td>No data</td>
                      )}
                    </tr>
                  ))}
                </Table>
              </div>
            </List>
          </>
        ) : (
          <Table></Table>
        )}
      </Content>
      <Modal id="edit">
        <button
          onClick={(events) => {
            var elt = document.querySelector("#edit");
            elt.style.display = "none";
          }}
        >
          X
        </button>
        <Form
          method="POST"
          onSubmit={async (what) => {
            console.log(what);
          }}
        >
          {Object.keys(formData) ? (
            Object.keys(formData).map((key) => (
              <>
                <label>{key}</label>
              </>
            ))
          ) : (
            <h1>no data</h1>
          )}
          <input type="submit" name="save" value="Save"></input>
        </Form>
      </Modal>
      <Modal id="add">
        <button
          onClick={(events) => {
            var elt = document.querySelector("#add");
            elt.style.display = "none";
          }}
        >
          X
        </button>
        <input type="pass"></input>
        <Form
          method="POST"
          onSubmit={async (event) => {
            event.preventDefault();
            const token = state.token;
            try {
              var res = null;
              if (selectedItem === "Staffs") {
                res = await API.postStaff(token, models.Staffs);
              } else if (selectedItem === "Customers") {
                res = await API.postCustomer(token, models.Customers);
              } else if (selectedItem === "Products") {
                res = await API.postProduct(token, models.Products);
              } else if (selectedItem === "Service") {
                res = await API.postService(token, models.Services);
              }
              if (res.ok) {
                const data = await res.json();
                setTableData([...tableData, data]);
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {models[`${selectedItem}`] ? (
            Object.keys(models[`${selectedItem}`]).map((key) => (
              <>
                <label for={key}>{key}:</label>
                {modelConstraint[`${key}`] === "radio" ? (
                  <>
                    <input
                      type={modelConstraint[`${key}`]}
                      name={"sex"}
                      key={"male"}
                      id="male"
                      value={"Male"}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setModels(() => {
                            var model = models[`${selectedItem}`];
                            model[`${key}`] = event.target.value;
                            var modelsCopy = { ...models };
                            modelsCopy[`${selectedItem}`] = model;
                            return modelsCopy;
                          });
                        }
                      }}
                    ></input>
                    <label for="male" className="sex">
                      {"Male"}
                    </label>
                    <input
                      type={modelConstraint[`${key}`]}
                      name={"sex"}
                      key={"female"}
                      id="female"
                      value={"Female"}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setModels(() => {
                            var model = models[`${selectedItem}`];
                            model[`${key}`] = event.target.value;
                            var modelsCopy = { ...models };
                            modelsCopy[`${selectedItem}`] = model;
                            return modelsCopy;
                          });
                        }
                      }}
                    ></input>
                    <label for="female" className="sex">
                      {"Female"}
                    </label>
                  </>
                ) : (
                  <input
                    type={modelConstraint[`${key}`]}
                    name={key}
                    step=".01"
                    onChange={(event) => {
                      setModels(() => {
                        var model = models[`${selectedItem}`];
                        model[`${key}`] = event.target.value;
                        var modelsCopy = { ...models };
                        modelsCopy[`${selectedItem}`] = model;
                        return modelsCopy;
                      });
                    }}
                    value={models[`${selectedItem}`].key}
                  ></input>
                )}
              </>
            ))
          ) : (
            <h1>You cannot add to this data</h1>
          )}
          <input type="submit" name="save" value="Save"></input>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default MyAccount;
