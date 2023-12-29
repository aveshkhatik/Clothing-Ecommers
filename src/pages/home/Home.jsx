import React from "react";
import Banner from "./Banner";
import Catogary from "./Catogary";
import Products from "./Products";
import Collection from "./Collection";
import BestSeller from "./BestSeller";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <>
    <Banner />
    <Catogary />
    <Products />
    <Collection />
    <BestSeller />
    <NewsLetter />
    </>
  );
};

export default Home;
