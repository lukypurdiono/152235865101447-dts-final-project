import React from "react";
import Navbar from "../components/Navbar";
import { useMealByIdQuery } from "../services/mealAPI";
import { useParams } from "react-router-dom";
import RecipeItem from "../components/RecipeItem";
import ReactLoading from "react-loading";
import { useState } from "react";
import Footer from "../components/Footer";

const DetailRecipe = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMealByIdQuery(id);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="flex bg-bcolor flex-col">
          <div className="flex justify-evenly flex-wrap items-center mx-8">
            {error ? (
              <>ada error disini</>
            ) : isLoading ? (
              <ReactLoading
                type={"balls"}
                color={"#F38181"}
                height={"20%"}
                width={"20%"}
              />
            ) : (
              data.meals.map((meal) => (
                <RecipeItem key={meal.idMeal} meal={meal} />
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DetailRecipe;
