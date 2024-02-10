import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ContactUsPage from "./ContactUsPage";
import { UserProvider } from "./context";

function App() {
  return (
    <React.Fragment>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/rhoxklin/" element={<HomePage></HomePage>} />
            <Route
              path="/rhoxklin/laundry"
              element={<LaundryPage></LaundryPage>}
            />
            <Route
              path="/rhoxklin/cleaning"
              element={<CleaningPage></CleaningPage>}
            />

            <Route
              path="/rhoxklin/cleaningproductscategories"
              element={
                <CleaningProductsCategoriesPage></CleaningProductsCategoriesPage>
              }
            />
            <Route
              path="/rhoxklin/cleaningmachines"
              element={<CleaningMachinesPage></CleaningMachinesPage>}
            />
            <Route path="/rhoxklin/artworks" element={<h1>Coming Soon!</h1>} />
            <Route
              path="/rhoxklin/pickupanddelivery"
              element={<h1>Coming Soon!</h1>}
            />
            <Route path="/rhoxklin/cart" element={<CartPage></CartPage>} />
            <Route path="/rhoxklin/login" element={<LoginPage></LoginPage>} />
            <Route
              path="/rhoxklin/createaccount"
              element={<CreateAccountPage></CreateAccountPage>}
            />
            <Route
              path="/rhoxklin/myaccount"
              element={<MyAccountPage></MyAccountPage>}
            />
            <Route
              path="/rhoxklin/contactus"
              element={<ContactUsPage></ContactUsPage>}
            ></Route>
          </Routes>
          <GlobalStyle />
        </UserProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
