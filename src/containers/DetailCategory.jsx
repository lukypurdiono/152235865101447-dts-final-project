import React from "react";
import DetailCategoryItem from "../components/DetailCategoryItem";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useMealByCategoryQuery } from "../services/mealAPI";
import ReactLoading from "react-loading";

const DetailCategory = () => {
  const { category } = useParams();
  const { data, error, isLoading } = useMealByCategoryQuery(category);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="flex bg-bcolor flex-col">
        <div>
          <h1 className="flex justify-center font-bold text-primary mb-4 text-3xl">
            {category} Categories
          </h1>
        </div>
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
            data.meals.map((item) => (
              <DetailCategoryItem key={item.strMeal} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCategory;
