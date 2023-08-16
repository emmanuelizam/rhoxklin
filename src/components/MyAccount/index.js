import React from "react";
import {
  ContactUs,
  Content,
  Form,
  Title,
  Wrapper,
  Menu,
  List,
} from "./MyAccount.styles";

const laundry = require("../../images/washed_garments.jpg");

const MyAccount = () => {
  var formProto = (
    <Form method="post">
      <label for="firstname">First name: </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Enter your first name"
        required="required"
        disabled
      />
      <br />
      <label for="surname">Surname: </label>
      <input
        type="text"
        name="surname"
        id="surname"
        placeholder="Enter your surname"
        required="required"
        disabled
      />
      <br />
      <label for="phoneNumber">Phone Number: </label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Enter your phone number"
        required="required"
        disabled
      />
      <br />
      <label for="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
        required="required"
        disabled
      />
      <br />
      <label for="address">Address: </label>
      <input
        type="address"
        name="address"
        id="address"
        placeholder="Enter your Address"
        required="required"
        disabled
      />
      <br />
      <label for="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        required="required"
        minLength="8"
        disabled
      />
      <br />
      <br />
      <input type="button" name="edit" id="edit" value="Edit" />
      <input type="button" name="save" id="save" value="Save" />
    </Form>
  );
  return (
    <Wrapper>
      <Title>
        <h2>My Account</h2>
      </Title>
      <div id="id01" class="modal">
        <a href="#">X</a>
        <Form method="post">
          <label for="firstname">First name: </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            required="required"
            disabled
          />
          <br />
          <label for="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Enter your surname"
            required="required"
            disabled
          />
          <br />
          <label for="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phone number"
            required="required"
            disabled
          />
          <br />
          <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            required="required"
            disabled
          />
          <br />
          <label for="address">Address: </label>
          <input
            type="address"
            name="address"
            id="address"
            placeholder="Enter your Address"
            required="required"
            disabled
          />
          <br />
          <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required="required"
            minLength="8"
            disabled
          />
          <br />
          <br />
          <input type="button" name="edit" id="edit" value="Edit" />
          <input type="button" name="save" id="save" value="Save" />
        </Form>
      </div>
      <Content>
        <Menu>
          <button>
            <span>Account Details </span>
          </button>
          <button>
            <span>Customers </span>
          </button>
          <button>
            <span>Staffs </span>
          </button>
          <button>
            <span>Cleaning Machines </span>
          </button>
        </Menu>
        <List>
          <tr>
            <th>head1</th>
            <th>head1</th>
            <th>head1</th>
            <th>head1</th>
          </tr>

          <tr>
            <td>
              <a href="#id01">hi</a>
            </td>
            <td>
              <a href="#id01">hi</a>
            </td>

            <td>
              <a href="#id01">hi</a>
            </td>

            <td>
              <a href="#id01">hi</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#id01">hi</a>
            </td>
            <td>
              <a href="#id01">hi</a>
            </td>

            <td>
              <a href="#id01">hi</a>
            </td>

            <td>
              <a href="#id01">hi</a>
            </td>
          </tr>
        </List>
        {/* <Form method="post">
          <label for="firstname">First name: </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            required="required"
            disabled
          />
          <br />
          <label for="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Enter your surname"
            required="required"
            disabled
          />
          <br />
          <label for="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phone number"
            required="required"
            disabled
          />
          <br />
          <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            required="required"
            disabled
          />
          <br />
          <label for="address">Address: </label>
          <input
            type="address"
            name="address"
            id="address"
            placeholder="Enter your Address"
            required="required"
            disabled
          />
          <br />
          <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required="required"
            minLength="8"
            disabled
          />
          <br />
          <br />
          <input type="button" name="edit" id="edit" value="Edit" />
          <input type="button" name="save" id="save" value="Save" />
        </Form> */}
      </Content>
      <ContactUs>
        <h2>CONTACT US</h2>
      </ContactUs>
    </Wrapper>
  );
};

export default MyAccount;
