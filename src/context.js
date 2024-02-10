import React, { createContext, useState } from "react";

export const Context = createContext();

/**
 *
 * @param {React.Component[]} children are the components that will need access to the state defined
 * @function UserProvider is a component.
 * @returns
 */

export const UserProvider = ({ children }) => {
  const [state, setstate] = useState(undefined);
  const [cartNumber, setCartNumber] = useState(0);
  return (
    <Context.Provider value={[state, setstate, cartNumber, setCartNumber]}>
      {children}
    </Context.Provider>
  );
};
