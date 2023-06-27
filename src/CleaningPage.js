import { React } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CleaningServices from "./components/CleaningServices";

const CleaningPage = () => {
  return (
    <>
      <Header></Header>
      <CleaningServices></CleaningServices>
      <Footer></Footer>
    </>
  );
};

export default CleaningPage;
