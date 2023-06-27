import { React } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CleaningProductsCategories from "./components/CleaningProductsCategories";

const CleaningProductsCategoriesPage = () => {
  return (
    <>
      <Header></Header>
      <CleaningProductsCategories></CleaningProductsCategories>
      <Footer></Footer>
    </>
  );
};

export default CleaningProductsCategoriesPage;
