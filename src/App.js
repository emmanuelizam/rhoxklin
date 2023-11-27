import React from "react";
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

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/laundry" element={<LaundryPage></LaundryPage>} />
          <Route path="/cleaning" element={<CleaningPage></CleaningPage>} />

          <Route
            path="/cleaningproductscategories"
            element={
              <CleaningProductsCategoriesPage></CleaningProductsCategoriesPage>
            }
          />
          <Route
            path="/cleaningmachines"
            element={<CleaningMachinesPage></CleaningMachinesPage>}
          />
          <Route path="/artworks" element={<h1>Coming Soon!</h1>} />
          <Route path="/pickupanddelivery" element={<h1>Coming Soon!</h1>} />
          <Route path="/cart" element={<CartPage></CartPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route
            path="/createaccount"
            element={<CreateAccountPage></CreateAccountPage>}
          />
          <Route path="/myaccount" element={<MyAccountPage></MyAccountPage>} />
          <Route
            path="/contactus"
            element={<ContactUsPage></ContactUsPage>}
          ></Route>
        </Routes>
        <GlobalStyle />
      </Router>
    </React.Fragment>
  );
}

export default App;
