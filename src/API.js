import Utils from "./Utils";

const authenticate = (credentials) => {
  return fetch("http://localhost:5000/api/login", {
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
    headers: { Authorization: `Bearer ${token.token}` },
  });
};

const fetchCustomers = (token) => {
  return fetch(`http://localhost:5000/protected-api/customer`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token.token}` },
  });
};

const postMessage = (message) => {
  return fetch("http://localhost:5000/api/staffcustomermessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
};

const fetchCleaningMachines = () => {
  return fetch(`http://localhost:5000/api/product`, {
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

const removeCleaningMachineFromCart = (id) => {
  return fetch(`http://localhost:5000/api/cartItem/${id}`, {
    method: "DELETE",
  });
};

const fetchCartItems = () => {
  return fetch(`http://localhost:5000/api/cartItem`, {
    method: "GET",
  });
};

const API = {
  authenticate,
  fetchCurrentUserDetails,
  fetchMessages,
  fetchCustomers,
  postMessage,
  fetchCleaningMachines,
  addCleaningMachineToCart,
  removeCleaningMachineFromCart,
  fetchCartItems,
};

export default API;
