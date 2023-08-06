import React from "react";
import Hero from "../components/Hero";
import FetchData from "../components/FetchData";
const Home = () => {
  return (
    <>
      <FetchData />
      <Hero />
    </>
  );
};

export default Home;
