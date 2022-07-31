import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesItem = ({ categoriItem }) => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div
      className="bg-bcolor flex flex-col border-primary border-2 w-80 rounded-2xl items-center mt-4 overflow-hidden drop-shadow-xl hover:cursor-pointer"
      onClick={() => handleClick(categoriItem.strCategory)}
    >
      <div>
        <img
          src={categoriItem.strCategoryThumb}
          alt="recipe categories"
          className=" h-64 hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex text-2xl font-bold text-slate-900 p-1">
        <h2>{categoriItem.strCategory}</h2>
      </div>
    </div>
  );
};

export default CategoriesItem;
