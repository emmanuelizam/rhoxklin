import { React, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CleaningServices from "./components/CleaningServices";
import ContactUsModal from "./components/ContactUsModal";

const CleaningPage = () => {
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
      <CleaningServices
        setDisplay={setDisplay}
        setMessageTitle={setMessageTitle}
      ></CleaningServices>
      <Footer></Footer>
    </>
  );
};

export default CleaningPage;
