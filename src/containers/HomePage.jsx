import React from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="bg-bcolor h-screen">
      <Hero />
      <Categories />
    </div>
  );
};

export default HomePage;
