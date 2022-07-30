import React from "react";
import CategoriesList from "../components/CategoriesList";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="bg-bcolor h-screen">
      <Hero />
      <CategoriesList />
    </div>
  );
};

export default HomePage;
