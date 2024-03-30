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

const fetchMessages = (token, query) => {
  return fetch(
    `http://localhost:5000/protected-api/staffcustomermessage?name=${query}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const fetchCustomers = (token, query) => {
  return fetch(`http://localhost:5000/protected-api/customer?name=${query}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const fetchStaffs = (token, query) => {
  return fetch(`http://localhost:5000/protected-api/staff?name=${query}`, {
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

const fetchProducts = (query) => {
  return fetch(`http://localhost:5000/api/product?name=${query}`, {
    method: "GET",
  });
};
const fetchCartItems = () => {
  return fetch(`http://localhost:5000/api/cartItem`, {
    method: "GET",
  });
};
const fetchTestimonials = (query) => {
  return fetch(`http://localhost:5000/api/testimonial?name=${query}`, {
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

const postTestimonial = (token, testimonial) => {
  return fetch("http://localhost:5000/protected-api/testimonial", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
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

const putTestimonial = (token, testimonial) => {
  return fetch("http://localhost:5000/protected-api/testimonial", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
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

const deleteServices = async (token, id) => {
  return fetch(`http://localhost:5000/protected-api/service/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteTestimonials = async (token, id) => {
  return fetch(`http://localhost:5000/protected-api/testimonial/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

const API = {
  authenticate,
  fetchCurrentUserDetails,
  fetchMessages,
  fetchCustomers,
  fetchProducts,
  fetchCartItems,
  fetchStaffs,
  fetchStaff,
  fetchTestimonials,
  addCleaningMachineToCart,
  postMessage,
  postStaff,
  postCustomer,
  postProduct,
  postService,
  postTestimonial,
  putMessage,
  putStaff,
  putCustomer,
  putProduct,
  putService,
  putTestimonial,
  removeCleaningMachineFromCart,
  deleteCurrentUserDetails,
  deleteStaffs,
  deleteCustomers,
  deleteCleaningProducts,
  deleteMessages,
  deleteServices,
  deleteTestimonials,
};

export default API;
