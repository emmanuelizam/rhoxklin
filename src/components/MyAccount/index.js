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
import Loader from "../Loader";

const modelConstraint = {
  birthday: "date",
  email: "email",
  password: "password",
  name: "text",
  role: "text",
  sex: "radio",
  description: "text",
  price: "number",
  phoneNumber: "tel",
  content: "text",
  picture: "file",
  id: "number",
  createdAt: "datetime-local",
  updatedAt: "datetime-local",
};
const displayModels = {
  Staffs: {
    id: null,
    name: null,
    birthday: null,
    sex: null,
    role: null,
    phoneNumber: null,
    email: null,
    password: null,
    createdAt: null,
    updatedAt: null,
  },
  Customers: {
    id: null,
    name: null,
    birthday: null,
    sex: null,
    phoneNumber: null,
    email: null,
    password: null,
    createdAt: null,
    updatedAt: null,
  },
  Products: {
    id: null,
    name: null,
    description: null,
    price: null,
    createdAt: null,
    updatedAt: null,
  },
  Services: {
    id: null,
    name: null,
    description: null,
    price: null,
    createdAt: null,
    updatedAt: null,
  },
  Messages: {
    id: null,
    content: null,
    StaffId: null,
    CustomerId: null,
    senderIsCustomer: null,
    dateSend: null,
    createdAt: null,
    updatedAt: null,
  },
  Testimonials: {
    id: null,
    name: null,
    content: null,
    picture: null,
    createdAt: null,
    updatedAt: null,
  },
};

const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (file.type === "image/png" || file.type === "image/jpeg") {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        return resolve(event.target.result);
      };
      fileReader.onerror = (error) => {
        console.log(error);
        return reject(error);
      };
      fileReader.readAsDataURL(file);
    } else {
      return reject(new Error("file must be png or jpg"));
    }
  });
};

const Error = () => {
  return (
    <div>
      <h1>An error has Occured</h1>
    </div>
  );
};

const EditFormComponent = ({
  state,
  tableData,
  setTableData,
  recordAdded,
  setRecordAdded,
  editForm,
  setEditForm,
  selectedItem,
}) => {
  const handlePutSubmit = async (event) => {
    event.preventDefault();
    const token = state.token;
    try {
      var res = null;

      // cleaning data
      delete editForm.createdAt;
      delete editForm.updatedAt;
      if (selectedItem === "Staffs") {
        res = await API.putStaff(token, editForm);
      } else if (selectedItem === "Customers") {
        res = await API.putCustomer(token, editForm);
      } else if (selectedItem === "Products") {
        res = await API.putProduct(token, editForm);
      } else if (selectedItem === "Services") {
        res = await API.putService(token, editForm);
      } else if (selectedItem === "Testimonials") {
        res = await API.putTestimonial(token, editForm);
      }
      if (res.ok) {
        const data = await res.json();
        // we now update our table by relacing any item on the table whose id
        // is same with our response data
        // note: use spread to ensure that a new object is created
        // otherwise return the item
        setTableData(
          tableData.map((item) => (item.id === data.id ? { ...data } : item))
        );
        setRecordAdded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (recordAdded) {
    return (
      <Title>
        <h2>{selectedItem} record was edited successfully!</h2>
      </Title>
    );
  } else {
    return (
      <Form method="POST" onSubmit={handlePutSubmit}>
        {Object.keys(editForm).length > 0 ? (
          Object.keys(editForm).map((key) => (
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
                      // if it's a male check this
                      editForm[`${key}`] === "Male" ? true : false
                    }
                    onChange={(event) => {
                      if (event.target.checked) {
                        setEditForm({
                          ...editForm,
                          [event.target.name]: event.target.value,
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
                      // if it's a female, check this
                      editForm[`${key}`] === "Female" ? true : false
                    }
                    onChange={(event) => {
                      if (event.target.checked) {
                        setEditForm({
                          ...editForm,
                          [event.target.name]: event.target.value,
                        });
                      }
                    }}
                  ></input>
                  <label for="female" className="sex">
                    {"Female"}
                  </label>
                </>
              ) : (
                <>
                  <input
                    type={modelConstraint[`${key}`]}
                    name={key}
                    id={key}
                    key={`input-${selectedItem}-${key}`}
                    disabled={
                      key === "id" || key === "createdAt" || key === "updatedAt"
                        ? true
                        : false
                    }
                    step={key === "price" ? ".01" : ""}
                    pattern={
                      key === "password"
                        ? `^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])[A-Za-z0123456789/?!;'":,.<>][}{!@#$%^&*()-=_+\`~\\]{8,}$`
                        : null
                    }
                    placeholder={
                      key === "password"
                        ? "must contain an upper and lower case letter and a number and a symbol"
                        : null
                    }
                    accept={key === "picture" ? ".png,.jpg,.jpeg" : null}
                    onChange={async (event) => {
                      // if we have a picture, we must convert it to base64 first
                      if (event.target.name === "picture") {
                        var result = await convertImageToBase64(
                          event.target.files[0]
                        );
                        setEditForm({
                          ...editForm,
                          [event.target.name]: result,
                        });
                      } else {
                        setEditForm({
                          ...editForm,
                          [event.target.name]: event.target.value,
                        });
                      }
                    }}
                    value={key !== "picture" ? editForm[`${key}`] : ""}
                  ></input>
                  {key === "picture" ? (
                    <img alt="not selected yet" src={editForm[`${key}`]}></img>
                  ) : (
                    <br />
                  )}
                </>
              )}
            </>
          ))
        ) : (
          <h1>You cannot edit this record</h1>
        )}
        <input type="submit" name="save" value="Save"></input>
      </Form>
    );
  }
};

const AddFormComponent = ({
  state,
  tableData,
  setTableData,
  recordAdded,
  setRecordAdded,
  addForm,
  setAddForm,
  selectedItem,
}) => {
  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const token = state.token;
    try {
      var res = null;
      if (selectedItem === "Staffs") {
        res = await API.postStaff(token, addForm);
      } else if (selectedItem === "Customers") {
        res = await API.postCustomer(token, addForm);
      } else if (selectedItem === "Products") {
        res = await API.postProduct(token, addForm);
      } else if (selectedItem === "Services") {
        res = await API.postService(token, addForm);
      } else if (selectedItem === "Testimonials") {
        res = await API.postTestimonial(token, addForm);
      }
      if (res.ok) {
        const data = await res.json();
        // we now want to add our new data to tableData
        // we want to also ensure that the data is arranged in the correct order
        setTableData([
          ...tableData,
          { ...displayModels[`${selectedItem}`], ...data },
        ]);
        setRecordAdded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (recordAdded) {
    return (
      <Title>
        <h2>{selectedItem} record was added successfully!</h2>
      </Title>
    );
  } else {
    return (
      <Form method="POST" onSubmit={handlePostSubmit}>
        {displayModels[`${selectedItem}`] ? (
          Object.keys(displayModels[`${selectedItem}`]).map((key) => (
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
                        setAddForm({
                          ...addForm,
                          [event.target.name]: event.target.value,
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
                        setAddForm({
                          ...addForm,
                          [event.target.name]: event.target.value,
                        });
                      }
                    }}
                  ></input>
                  <label for="female" className="sex">
                    {"Female"}
                  </label>
                </>
              ) : (
                <>
                  <input
                    type={modelConstraint[`${key}`]}
                    name={key}
                    step={key === "price" ? ".01" : ""}
                    disabled={
                      key === "id" || key === "createdAt" || key === "updatedAt"
                        ? true
                        : false
                    }
                    pattern={
                      key === "password"
                        ? /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])[A-Za-z\d/?!;'":,.<>\]\[}{!@#$%^&*()-=_+`~\\]{8,}$/
                        : null
                    }
                    placeholder={
                      key === "password"
                        ? "must contain an upper and lower case letter and a number and a symbol"
                        : null
                    }
                    accept={key === "picture" ? ".png,.jpg,.jpeg" : null}
                    onChange={async (event) => {
                      // if we have a picture, we must convert it to base64 first
                      if (event.target.name === "picture") {
                        var result = await convertImageToBase64(
                          event.target.files[0]
                        );
                        setAddForm({
                          ...addForm,
                          [event.target.name]: result,
                        });
                      } else {
                        setAddForm({
                          ...addForm,
                          [event.target.name]: event.target.value,
                        });
                      }
                    }}
                    value={key !== "picture" ? addForm[`${key}`] : ""}
                  ></input>
                  {key === "picture" ? (
                    <img alt="not selected yet" src={addForm[`${key}`]}></img>
                  ) : (
                    <br />
                  )}
                </>
              )}
            </>
          ))
        ) : (
          <h1>You cannot add to this data</h1>
        )}
        <input type="submit" name="save" value="Save"></input>
      </Form>
    );
  }
};

const MyAccount = () => {
  const navigate = useNavigate();
  const [state, setstate, localCart, setLocalCart] = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Staffs");
  const [selectedItems, setSelectedItems] = useState([]);
  const [recordAdded, setRecordAdded] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [addForm, setAddForm] = useState({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const token = state ? state.token : null;
        const id = state ? state.user.id : null;
        if (token) {
          var res = null;
          if (selectedItem === "Account Details") {
            res = await API.fetchStaff(token, id);
          } else if (selectedItem === "Messages") {
            res = await API.fetchMessages(token, query);
          } else if (selectedItem === "Customers") {
            res = await API.fetchCustomers(token, query);
          } else if (selectedItem === "Staffs") {
            res = await API.fetchStaffs(token, query);
          } else if (selectedItem === "Products") {
            // this does not require any authentication
            res = await API.fetchProducts(query);
          } else if (selectedItem === "Testimonials") {
            // this does not require any authentication
            res = await API.fetchTestimonials(query);
          }
          // AccountDetails comes like this {} while other come like this []
          // the code below tries to make AccountDetails compatible with others
          if (res.ok) {
            var data = await res.json();
            setLoading(false);
            // if it's not "Account Details" and the there is more than one entry in the data
            // setTableData as data
            // otherwise if there is nothing in data, return a displayModel
            if (selectedItem !== "Account Details") {
              setTableData(
                data.length > 0 ? data : [displayModels[`${selectedItem}`]]
              );
            } else {
              // otherwise check there are keys in data
              // if yes: return data as an elt of an array
              // if no: return the displayModel
              setTableData(
                Object.keys(data).length > 0
                  ? [data]
                  : [displayModels[`Staffs`]]
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
  }, [selectedItem, query]);

  const handleDelete = async (event, id) => {
    try {
      const token = state.token;
      //const id = event.target.id;
      const deleteItems = async () => {
        if (token) {
          // prevent staff from deleting his own records, records of customer with id=1 and staff with id=1
          if (selectedItem === "Account Details") {
            return id !== 1 && id !== state.user.id
              ? await API.deleteCurrentUserDetails(token, id)
              : { ok: false };
          } else if (selectedItem === "Messages") {
            return await API.deleteMessages(token, id);
          } else if (selectedItem === "Customers") {
            return id !== 1
              ? await API.deleteCustomers(token, id)
              : { ok: false };
          } else if (selectedItem === "Staffs") {
            return id !== 1 && id !== state.user.id
              ? await API.deleteStaffs(token, id)
              : { ok: false };
          } else if (selectedItem === "Products") {
            return await API.deleteCleaningProducts(token, id);
          } else if (selectedItem === "Testimonials") {
            return await API.deleteTestimonials(token, id);
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
          <button
            onClick={() => {
              setSelectedItem("Testimonials");
            }}
          >
            <span>Testimonials </span>
          </button>
        </Menu>
        <>
          <Title>
            <h2>{selectedItem}</h2>
          </Title>
          <SearchAndAdd>
            <button
              onClick={(event) => {
                // ensure that addForm is cleared because it will be used in storing form data
                setAddForm({});
                if (event.target.className !== ("checkbox" || "checkboxCell")) {
                  setRecordAdded(false);
                  var elt = document.querySelector("#add");
                  elt.style.display = "block";
                }
              }}
            >
              Add New Record
            </button>
            <input
              type="text"
              name="search"
              placeholder="search"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              value={query}
            ></input>
          </SearchAndAdd>
          <List>
            <div>
              {!loading ? (
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
                    {Object.keys(
                      displayModels[
                        `${
                          selectedItem === "Account Details"
                            ? "Staffs"
                            : selectedItem
                        }`
                      ]
                    ).map((key) => (
                      <th>{key}</th>
                    ))}
                  </tr>
                  {!error ? (
                    tableData.map(
                      (entry) =>
                        entry.id && (
                          <tr
                            key={`${selectedItem}-${entry.id}`}
                            id={`${selectedItem}-${entry.id}`}
                            onClick={(event) => {
                              // ensure that editForm is cleared before anything is added to it
                              setEditForm({});
                              if (
                                event.target.className !== "checkbox" &&
                                event.target.className !== "checkboxCell" &&
                                event.target.className !== "delete"
                              ) {
                                // birthday comes with a time element that is not displayed on date
                                // we therefore remove the time element
                                if (entry.birthday) {
                                  entry.birthday = entry.birthday.split("T")[0];
                                }
                                setEditForm(entry);
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
                              Object.keys(entry).map((key) =>
                                key !== "password" ? (
                                  <td>
                                    {key !== "picture" ? (
                                      entry[key]
                                    ) : (
                                      <img
                                        src={`${entry[key]}`}
                                        alt="person"
                                      ></img>
                                    )}
                                  </td>
                                ) : (
                                  <td>***</td>
                                )
                              )
                            ) : (
                              <td></td>
                            )}
                          </tr>
                        )
                    )
                  ) : (
                    <Error />
                  )}
                </Table>
              ) : (
                <Loader></Loader>
              )}
            </div>
          </List>
        </>
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
        <EditFormComponent
          state={state}
          tableData={tableData}
          setTableData={setTableData}
          recordAdded={recordAdded}
          setRecordAdded={setRecordAdded}
          editForm={editForm}
          setEditForm={setEditForm}
          selectedItem={selectedItem}
        ></EditFormComponent>
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
        <AddFormComponent
          state={state}
          tableData={tableData}
          setTableData={setTableData}
          recordAdded={recordAdded}
          setRecordAdded={setRecordAdded}
          addForm={addForm}
          setAddForm={setAddForm}
          selectedItem={selectedItem}
        ></AddFormComponent>
      </Modal>
    </Wrapper>
  );
};

export default MyAccount;
