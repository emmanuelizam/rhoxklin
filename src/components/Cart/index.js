import React, { useState, useEffect, useContext } from "react";
import {
  ContactUsButton,
  Content,
  Remove,
  Name,
  Service,
  Title,
  Wrapper,
} from "./Cart.styles";
import trash from "../../images/icon-trash.svg";
import API from "../../API";
import { Context } from "../../context";

const Cart = ({ setDisplay, setMessageTitle, Loader }) => {
  const [state, setstate, cartNumber, setCartNumber] = useContext(Context);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const buyNow = (event) => {
    var message = "";
    cartItems.forEach((item, index) => {
      var number = index + 1;
      message =
        message +
        number +
        ") " +
        item.quantity +
        " " +
        item.Product.name +
        " at  ₦" +
        item.Product.price +
        " per piece\n\n";
    });
    console.log(message);
    setDisplay("block");
    setMessageTitle("ORDER  \n\n" + message);
  };

  const removeFromCart = async (cart_id) => {
    const cart = cartItems;
    try {
      const resp = await API.removeCleaningMachineFromCart(cart_id);
      if (resp.ok) {
        resp
          .json()
          .then((data) => {
            setCartItems(
              cartItems.filter((item) => item.id !== parseInt(cart_id))
            );
            // this is done because seCartItems will not decrease cartItems by 1 immediately
            // but we know that having reached this point, the operation will be done
            setCartNumber(cartItems.length - 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const resp = await API.fetchCartItems();
        if (resp.ok) {
          resp
            .json()
            .then((value) => {
              setCartItems(value);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    getCartItems();
  }, {});
  return (
    <Wrapper>
      <Title>
        <h2>CART</h2>
      </Title>
      <Content>
        {!loading ? (
          cartItems.map((item, index) => (
            <Service key={item.id}>
              <Name>
                <h1>{item.Product.name}</h1>
              </Name>
              <Remove
                id={item.id}
                trash={trash}
                onClick={async (event) => {
                  const cart_id = event.target.id;
                  removeFromCart(cart_id);
                }}
              ></Remove>
            </Service>
          ))
        ) : (
          <Loader />
        )}
      </Content>
      {cartItems.length > 0 ? (
        <ContactUsButton onClick={buyNow}>
          <h2>BUY NOW</h2>
        </ContactUsButton>
      ) : (
        <ContactUsButton href="./cleaningmachines">
          <h2>Your cart is empty!</h2>
        </ContactUsButton>
      )}
    </Wrapper>
  );
};

export default Cart;
