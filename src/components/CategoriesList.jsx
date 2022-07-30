import React from "react";

import CategoriesItem from "./CategoriesItem";

import { useCategoriesQuery } from "../services/mealAPI";

const CategoriesList = () => {
  const { data, error, isLoading } = useCategoriesQuery();

  return (
    <div className="flex bg-bcolor flex-col">
      <div>
        <h1 className="flex justify-center font-bold text-slate-900 mb-4 text-3xl">
          Categories
        </h1>
      </div>
      <div className="flex justify-center flex-wrap items-center mx-8">
        {error ? (
          <>ada error disini</>
        ) : isLoading ? (
          <>Loading data</>
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
