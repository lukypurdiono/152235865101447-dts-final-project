import React from "react";
import DetailCategoryItem from "../components/DetailCategoryItem";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useMealByCategoryQuery } from "../services/mealAPI";

const DetailCategory = () => {
  const { category } = useParams();
  const { data, error, isLoading } = useMealByCategoryQuery(category);
  console.log(data);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex bg-bcolor flex-col">
        <div>
          <h1 className="flex justify-center font-bold text-slate-900 mb-4 text-3xl">
            Categories
          </h1>
        </div>
        <div className="flex justify-evenly flex-wrap items-center mx-8">
          {error ? (
            <>ada error disini</>
          ) : isLoading ? (
            <>Loading data</>
          ) : (
            data.meals.map((item) => (
              <DetailCategoryItem key={item.strMeal} item={item} />
            ))
          )}
          ;{/* {data.meals.map((item) => item.strMeal)}; */}
        </div>
      </div>
    </>
  );
};

export default DetailCategory;
