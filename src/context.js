import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

/**
 *
 * @param {React.Component[]} children are the components that will need access to the state defined
 * @function UserProvider is a component.
 * @returns
 */

export const UserProvider = ({ children }) => {
  // state is used to store logged-in user details
  const [state, setstate] = useState(undefined);
  // LocalCart is used to store cart in localStorage for a user that is not logged in
  var cartItems = localStorage.getItem("localCart");
  const [localCart, setLocalCart] = useState(
    (cartItems && JSON.parse(cartItems)) || []
  );
  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(localCart));
  }, [localCart, localCart.length]);

  return (
    <Context.Provider
      value={[
        state,
        setstate,
        //cartNumber,
        //setCartNumber,
        localCart,
        setLocalCart,
      ]}
    >
      {children}
    </Context.Provider>
  );
};
