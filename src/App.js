import React from "react";

import HomePage from "./HomePage";
import LaundryPage from "./LaundryPage";
import CleaningPage from "./CleaningPage";
import CartPage from "./CartPage";
import CleaningProductsCategoriesPage from "./CleaningProductsCategoriesPage";
import CleaningMachinesPage from "./CleaningMachinesPage";
import LoginPage from "./LoginPage";
import CreateAccountPage from "./CreateAccountPage";
import { GlobalStyle } from "./GlobalStyle";
import MyAccountPage from "./MyAccount";

function App() {
  return (
    <React.Fragment>
      <MyAccountPage></MyAccountPage>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
