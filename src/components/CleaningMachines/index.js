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
  const [state, setstate, localCart, setLocalCart] = useContext(Context);

  const addToCart = async (machine_id) => {
    const cart = localCart; // create a copy of the local cart and modify that copy
    const machine = cleaningMachines.find(
      (value) => value.id === parseInt(machine_id)
    );
    // if the user is not logged in persist data in localStorage
    if (!state) {
      document.getElementById(machine_id).innerHTML = "Remove";
      cart.push(machine);
      setLocalCart([...cart]);
    } else {
      // else persist data in server
      try {
        const resp = await API.addCleaningMachineToCart(machine_id);
        if (resp.ok) {
          resp
            .json()
            .then((data) => {
              if (data.id) {
                document.getElementById(machine_id).innerHTML = "Remove";
                cart.push(machine);
                setLocalCart(cart);
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
    }
  };

  const removeFromCart = async (machine_id) => {
    // if the user is not logged in, simply persist data in localStorage
    if (!state) {
      const cart = localCart.filter(
        (value) => value.id !== parseInt(machine_id)
      );
      document.getElementById(machine_id).innerHTML = "Add to Cart";
      setLocalCart([...cart]);
    } else {
      // if user is logged in, persist data in server
      try {
        const cart = localCart.filter(
          (value) => value.ProductId !== parseInt(machine_id)
        );
        const cartItem = localCart.find(
          (value) => value.ProductId === parseInt(machine_id)
        );
        const resp = await API.removeCleaningMachineFromCart(cartItem.id);
        if (resp.ok) {
          resp
            .json()
            .then((data) => {
              document.getElementById(machine_id).innerHTML = "Add to Cart";
              setLocalCart(cart);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const addOrRemove = async (elt) => {
    const machine_id = elt.id;
    if (elt.innerHTML === "Add to Cart") {
      await addToCart(machine_id);
    } else if (elt.innerHTML === "Remove") {
      await removeFromCart(machine_id);
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
            <Item key={machine.id}>
              <Details>
                <p>{machine.name}</p>
              </Details>
              <Price>
                <span>₦{machine.price}</span>
              </Price>
              <AddToCart
                onClick={async (event) => {
                  const elt = event.target.childNodes[0];
                  await addOrRemove(elt);
                }}
              >
                <span
                  id={machine.id}
                  onClick={async (event) => {
                    const elt = event.target;
                    await addOrRemove(elt);
                  }}
                >
                  {localCart.find((v) => v.id === machine.id)
                    ? "Remove"
                    : "Add to Cart"}
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
