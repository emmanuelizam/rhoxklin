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
import bin from "../../images/icon-trash.svg";

const MyAccount = () => {
  const navigate = useNavigate();
  const [state, setstate, localCart, setLocalCart] = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Staffs");
  const [selectedItems, setSelectedItems] = useState([]);
  const [recordAdded, setRecordAdded] = useState(false);
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
    Messages: {
      content: "",
      StaffId: "",
      CustomerId: "",
      senderIsCustomer: null,
      dateSend: "",
    },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = state ? state.token : null;
        const id = state ? state.user.id : null;
        if (token) {
          var res = null;
          if (selectedItem === "Account Details") {
            res = await API.fetchStaff(token, id);
          } else if (selectedItem === "Messages") {
            res = await API.fetchMessages(token);
          } else if (selectedItem === "Customers") {
            res = await API.fetchCustomers(token);
          } else if (selectedItem === "Staffs") {
            res = await API.fetchStaffs(token);
          } else if (selectedItem === "Products") {
            res = await API.fetchCleaningProducts(token);
          }
          // AccountDetails comes like this {} while other come like this []
          // the code below tries to make AccountDetails compatible with others
          if (res.ok) {
            var data = await res.json();
            if (selectedItem !== "Account Details") {
              setTableData(
                data.length > 0 ? data : [models[`${selectedItem}`]]
              );
            } else {
              setTableData(
                Object.keys(data).length > 0 ? [data] : [models[`Staffs`]]
              );
            }
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

  const handlePostSubmit = async (event) => {
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
        setTableData([...tableData, { ...models[`${selectedItem}`], ...data }]);
        setRecordAdded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePutSubmit = async (event) => {
    event.preventDefault();
    const token = state.token;
    try {
      var res = null;
      if (selectedItem === "Staffs") {
        res = await API.putStaff(token, models.Staffs);
      } else if (selectedItem === "Customers") {
        res = await API.putCustomer(token, models.Customers);
      } else if (selectedItem === "Products") {
        res = await API.putProduct(token, models.Products);
      } else if (selectedItem === "Service") {
        res = await API.putService(token, models.Services);
      }
      if (res.ok) {
        const data = await res.json();
        setTableData([...tableData, { ...models[`${selectedItem}`], ...data }]);
        setRecordAdded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event, id) => {
    try {
      const token = state.token;
      //const id = event.target.id;
      const deleteItems = async () => {
        if (token) {
          if (selectedItem === "Account Details") {
            return await API.deleteCurrentUserDetails(token, id);
          } else if (selectedItem === "Messages") {
            return await API.deleteMessages(token, id);
          } else if (selectedItem === "Customers") {
            return await API.deleteCustomers(token, id);
          } else if (selectedItem === "Staffs") {
            return await API.deleteStaffs(token, id);
          } else if (selectedItem === "Products") {
            return await API.deleteCleaningProducts(token, id);
          }
        }
      };
      const res = await deleteItems();
      if (res.ok) {
        const data = await res.json();
        setTableData(tableData.filter((item) => item.id !== parseInt(data.id)));
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

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
                      setRecordAdded(false);
                      var elt = document.querySelector("#add");
                      elt.style.display = "block";
                    }
                  }}
                >
                  Add New Record
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
                    <th className="delete">
                      <img src={bin} alt="delete" className="delete"></img>
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
                          event.target.className !== "checkbox" &&
                          event.target.className !== "checkboxCell" &&
                          event.target.className !== "delete"
                        ) {
                          setModels((prev) => {
                            prev[`${selectedItem}`] = entry;
                            return prev;
                          });
                          setRecordAdded(false);
                          var elt = document.querySelector("#edit");
                          elt.style.display = "block";
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
                      <td
                        className="delete"
                        onClick={(event) => {
                          var id = entry.id;
                          handleDelete(event, id);
                        }}
                      >
                        <img
                          className="delete"
                          src={bin}
                          alt="delete"
                          id={entry.id}
                        ></img>
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
        {recordAdded ? (
          <Title>
            <h2>{selectedItem} record was edited successfully!</h2>
          </Title>
        ) : (
          <Form method="POST" onSubmit={handlePutSubmit}>
            {models[`${selectedItem}`] ? (
              Object.keys(models[`${selectedItem}`]).map((key, index) => (
                <>
                  <label for={key}>{key}:</label>
                  {modelConstraint[`${key}`] === "radio" ? (
                    <>
                      <input
                        type={modelConstraint[`${key}`]}
                        name={"sex"}
                        id="male"
                        value={"Male"}
                        checked={
                          models[`${selectedItem}`][`${key}`] === "Male"
                            ? true
                            : false
                        }
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
                        id="female"
                        value={"Female"}
                        checked={
                          models[`${selectedItem}`][`${key}`] === "Female"
                            ? true
                            : false
                        }
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
                      id={key}
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
              <h1>You cannot edit this record</h1>
            )}
            <input type="submit" name="save" value="Save"></input>
          </Form>
        )}
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
        {recordAdded ? (
          <h1>{selectedItem} record was added successfully!</h1>
        ) : (
          <Form method="POST" onSubmit={handlePostSubmit}>
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
        )}
      </Modal>
    </Wrapper>
  );
};

export default MyAccount;
