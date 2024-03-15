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
  const [state, setstate, localCart, setLocalCart] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const buyNow = (event) => {
    var message = "";
    localCart.forEach((item, index) => {
      var number = index + 1;
      message =
        message +
        number +
        ") " +
        // item.quantity +
        // " " +
        item.name +
        " at  ₦" +
        item.price +
        " per piece\n\n";
    });
    console.log(message);
    setDisplay("block");
    setMessageTitle("ORDER  \n\n" + message);
  };

  const removeFromCart = async (cart_id) => {
    // if the user is not logged in, persist the data in local storage else store it in the server
    if (!state) {
      const cart = localCart.filter((item) => item.id !== parseInt(cart_id));
      setLocalCart([...cart]);
    } else {
      try {
        const resp = await API.removeCleaningMachineFromCart(cart_id);
        if (resp.ok) {
          resp
            .json()
            .then((data) => {
              setLocalCart(
                localCart.filter((item) => item.id !== parseInt(cart_id))
              );
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
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
              setLocalCart(value);
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
    if (state) {
      getCartItems();
    } else {
      // if the user is not logged in, simply use the localCart available in localStorage
      setLoading(false);
    }
  }, []);
  return (
    <Wrapper>
      <Title>
        <h2>CART</h2>
      </Title>
      <Content>
        {!loading ? (
          localCart.map((item, index) => (
            <Service key={item.id}>
              <Name>
                <h1>{item.name}</h1>
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
      {localCart.length > 0 ? (
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
