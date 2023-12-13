import { React, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CleaningProductsCategories from "./components/CleaningProductsCategories";
import ContactUsModal from "./components/ContactUsModal";

const CleaningProductsCategoriesPage = () => {
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
      <CleaningProductsCategories
        setDisplay={setDisplay}
        setMessageTitle={setMessageTitle}
      ></CleaningProductsCategories>
      <Footer></Footer>
    </>
  );
};

export default CleaningProductsCategoriesPage;
