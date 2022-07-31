import React from "react";

import CategoriesItem from "./CategoriesItem";

import { useCategoriesQuery } from "../services/mealAPI";
import ReactLoading from "react-loading";

const CategoriesList = () => {
  const { data, error, isLoading } = useCategoriesQuery();

  return (
    <div className="flex bg-bcolor flex-col">
      <div>
        <h1 className="flex justify-center font-bold text-primary mb-4 text-3xl">
          Categories
        </h1>
      </div>
      <div className="flex justify-evenly flex-wrap items-center mx-8">
        {error ? (
          <>ada error disini</>
        ) : isLoading ? (
          <ReactLoading
            type={"balls"}
            color={"#F38181"}
            height={"10%"}
            width={"10%"}
            className="mt-auto"
          />
        ) : (
          data.categories.map((categoriItem) => (
            <CategoriesItem
              key={categoriItem.idCategory}
              categoriItem={categoriItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoriesList;
