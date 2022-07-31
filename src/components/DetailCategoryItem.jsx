import React from "react";
import { useNavigate } from "react-router-dom";

const DetailCategoryItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (idMeal) => {
    navigate(`/detail/${idMeal}`);
  };
  let title = item.strMeal;
  let length = 15;
  let trim = title.substring(0, length);

  return (
    <div
      className="bg-bcolor flex flex-col border-primary border-2 w-80 rounded-2xl items-center mt-4 overflow-hidden drop-shadow-xl hover:cursor-pointer"
      onClick={() => handleClick(item.idMeal)}
    >
      <div>
        <img
          src={item.strMealThumb}
          alt="recipe categories"
          className=" h-64 hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex text-2xl font-bold text-slate-900 p-1">
        {/* <h2>{DetailcategoriItem1.strCategory}</h2> */}
        <h2>{trim}</h2>
      </div>
    </div>
  );
};

export default DetailCategoryItem;
