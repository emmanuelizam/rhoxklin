import { React, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LaundryServices from "./components/LaundryServices";
import ContactUsModal from "./components/ContactUsModal";

const LaundryPage = () => {
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
      <LaundryServices
        setDisplay={setDisplay}
        setMessageTitle={setMessageTitle}
      ></LaundryServices>
      <Footer></Footer>
    </>
  );
};

export default LaundryPage;
