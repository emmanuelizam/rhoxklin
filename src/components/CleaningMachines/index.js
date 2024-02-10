import React, { useEffect, useState, useContext } from "react";
import API from "../../API";
import {
  ContactUsButton,
  Content,
  Item,
  Details,
  AddToCart,
  Title,
  Wrapper,
  Price,
} from "./CleaningMachines.styles";
import { Context } from "../../context";

const CleaningMachines = () => {
  const [cleaningMachines, setCleaningMachines] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const [state, setstate, cartNumber, setCartNumber] = useContext(Context);
  const addToCart = async (machine_id) => {
    const cart = addedToCart;
    try {
      const resp = await API.addCleaningMachineToCart(machine_id);
      if (resp.ok) {
        resp
          .json()
          .then((data) => {
            if (data.id) {
              document.getElementById(machine_id).innerHTML = "Remove";
              cart[`${machine_id}`] = data.id;
              setAddedToCart(cart);
              setCartNumber(cartNumber + 1);
            } else {
              console.log(data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (cart_id, machine_id) => {
    const cart = addedToCart;
    try {
      const resp = await API.removeCleaningMachineFromCart(cart_id);
      if (resp.ok) {
        resp
          .json()
          .then((data) => {
            document.getElementById(machine_id).innerHTML = "Add to Cart";
            cart[`${machine_id}`] = null;
            setAddedToCart(cart);
            setCartNumber(cartNumber - 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getCleaningMachines = async () => {
      try {
        const resp = await API.fetchCleaningMachines();
        if (resp.ok) {
          resp
            .json()
            .then((value) => {
              setCleaningMachines(value);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCleaningMachines();
  }, []);
  return (
    <Wrapper>
      <Title>
        <h2>CLEANING MACHINES</h2>
      </Title>
      <Content>
        {cleaningMachines.length > 0 ? (
          cleaningMachines.map((machine) => (
            <Item>
              <Details>
                <p>{machine.name}</p>
              </Details>
              <Price>
                <span>₦{machine.price}</span>
              </Price>
              <AddToCart
                onClick={async (event) => {
                  const machine_id = event.target.childNodes[0].id;
                  if (!addedToCart[`${machine_id}`]) {
                    await addToCart(machine.id);
                  } else {
                    await removeFromCart(
                      addedToCart[`${machine_id}`],
                      machine_id
                    );
                  }
                }}
              >
                <span
                  key={machine.id}
                  id={machine.id}
                  onClick={async (event) => {
                    const machine_id = event.target.id;
                    if (!addedToCart[`${machine_id}`]) {
                      await addToCart(machine.id);
                    } else {
                      await removeFromCart(
                        addedToCart[`${machine_id}`],
                        machine_id
                      );
                    }
                  }}
                >
                  Add to Cart
                </span>
              </AddToCart>
            </Item>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Content>
      <ContactUsButton href="./contactus">
        <h2>BUY NOW</h2>
      </ContactUsButton>
    </Wrapper>
  );
};

export default CleaningMachines;
