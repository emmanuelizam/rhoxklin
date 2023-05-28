import { React } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LaundryServices from "./components/LaundryServices";

const Laundry = () => {
  return (
    <>
      <Header></Header>
      <LaundryServices></LaundryServices> <Footer></Footer>
    </>
  );
};

export default Laundry;
