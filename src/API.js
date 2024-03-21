import Utils from "./Utils";

const authenticate = (credentials) => {
  return fetch("http://localhost:5000/protected-api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
};

const fetchCurrentUserDetails = (user) => {
  return fetch(`http://localhost:5000/protected-api/staff/${user.id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${user.token}` },
  });
};

const fetchMessages = (token) => {
  return fetch(`http://localhost:5000/protected-api/staffcustomermessage`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const fetchCustomers = (token) => {
  return fetch(`http://localhost:5000/protected-api/customer`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const fetchStaffs = (token) => {
  return fetch(`http://localhost:5000/protected-api/staff`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const fetchStaff = (token, id) => {
  return fetch(`http://localhost:5000/protected-api/staff/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const fetchCleaningProducts = () => {
  return fetch(`http://localhost:5000/api/product`, {
    method: "GET",
  });
};
const fetchCartItems = () => {
  return fetch(`http://localhost:5000/api/cartItem`, {
    method: "GET",
  });
};
const addCleaningMachineToCart = (id) => {
  const item = {};
  item.CustomerId = 1;
  item.ProductId = id;
  item.dateAdded = Utils.getDateTime();
  item.quantity = 1;
  return fetch("http://localhost:5000/api/cartItem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

const postMessage = (message) => {
  return fetch("http://localhost:5000/api/staffcustomermessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
};

const postStaff = (token, staff) => {
  return fetch("http://localhost:5000/protected-api/staff", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(staff),
  });
};

const postCustomer = (token, customer) => {
  return fetch("http://localhost:5000/protected-api/customer", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
};

const postProduct = (token, product) => {
  return fetch("http://localhost:5000/protected-api/product", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

const postService = (token, service) => {
  return fetch("http://localhost:5000/protected-api/service", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(service),
  });
};

const putMessage = (token, message) => {
  return fetch("http://localhost:5000/api/staffcustomermessage", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};

const putStaff = (token, staff) => {
  return fetch("http://localhost:5000/protected-api/staff", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(staff),
  });
};

const putCustomer = (token, customer) => {
  return fetch("http://localhost:5000/protected-api/customer", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
};

const putProduct = (token, product) => {
  return fetch("http://localhost:5000/protected-api/product", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

const putService = (token, service) => {
  return fetch("http://localhost:5000/protected-api/service", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(service),
  });
};

const removeCleaningMachineFromCart = (token, id) => {
  return fetch(`http://localhost:5000/api/cartItem/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteCurrentUserDetails = (token, id) => {
  return fetch(`http://localhost:5000/protected-api/staff/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};
const deleteStaffs = (token, id) => {
  return fetch(`http://localhost:5000/protected-api/staff/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteCustomers = (token, id) => {
  return fetch(`http://localhost:5000/protected-api/customer/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteCleaningProducts = (token, id) => {
  return fetch(`http://localhost:5000/protected-api/product/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteMessages = async (token, id) => {
  return fetch(
    `http://localhost:5000/protected-api/staffcustomermessage/${id}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const API = {
  authenticate,
  fetchCurrentUserDetails,
  fetchMessages,
  fetchCustomers,
  fetchCleaningProducts,
  fetchCartItems,
  fetchStaffs,
  fetchStaff,
  addCleaningMachineToCart,
  postMessage,
  postStaff,
  postCustomer,
  postProduct,
  postService,
  putMessage,
  putStaff,
  putCustomer,
  putProduct,
  putService,
  removeCleaningMachineFromCart,
  deleteCurrentUserDetails,
  deleteStaffs,
  deleteCustomers,
  deleteCleaningProducts,
  deleteMessages,
};

export default API;
