import { React, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ContactUsModal from "./components/ContactUsModal";
import Loader from "./components/Loader";

const CartPage = () => {
  const [display, setDisplay] = useState("none");
  const [messageTitle, setMessageTitle] = useState("");
  return (
    <>
      <ContactUsModal
        display={display}
        setDisplay={setDisplay}
        messageTitle={messageTitle}
        setMessageTitle={setMessageTitle}
      ></ContactUsModal>
      <Header></Header>
      <Cart
        setDisplay={setDisplay}
        setMessageTitle={setMessageTitle}
        Loader={Loader}
      ></Cart>
      <Footer></Footer>
    </>
  );
};

export default CartPage;
