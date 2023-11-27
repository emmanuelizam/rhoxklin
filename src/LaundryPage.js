import { React } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LaundryServices from "./components/LaundryServices";
import ContactUsModal from "./components/ContactUsModal";

const LaundryPage = () => {
  return (
    <>
      <ContactUsModal></ContactUsModal>
      <Header></Header>
      <LaundryServices></LaundryServices>
      <Footer></Footer>
    </>
  );
};

export default LaundryPage;
