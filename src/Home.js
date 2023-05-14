import { React } from "react";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Services from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroImage></HeroImage>
      <Services></Services>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
};

export default Home;
