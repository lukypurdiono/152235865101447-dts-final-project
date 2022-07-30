import React from "react";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-bcolor h-screen max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <CategoriesList />
      <Footer />
    </div>
  );
};

export default HomePage;
