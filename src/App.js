import React from "react";

import Home from "./Home";
import Laundry from "./Laundry";
import Cleaning from "./Cleaning";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <Cleaning />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
