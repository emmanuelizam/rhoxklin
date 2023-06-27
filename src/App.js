import React from "react";

import HomePage from "./HomePage";
import LaundryPage from "./LaundryPage";
import CleaningPage from "./CleaningPage";
import CartPage from "./CartPage";
import CleaningProductsCategoriesPage from "./CleaningProductsCategoriesPage";
import CleaningMachinesPage from "./CleaningMachinesPage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <CleaningMachinesPage></CleaningMachinesPage>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
