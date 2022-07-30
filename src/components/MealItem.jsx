import React from "react";

const MealItem = () => {
  return (
    <div className="bg-bcolor flex flex-col border border-slate-700 w-80 rounded-2xl items-center">
      <div>
        <img
          src={require("../assets/hero1.png")}
          alt="book recipe"
          className="w-64 h-64"
        />
      </div>
      <div className="flex w-full justify-around mt-2">
        <p>45 menites</p>
        <p>SUPER EASY</p>
      </div>
      <div className="flex mt-2">
        <h2>Baked Sweet</h2>
      </div>
    </div>
  );
};

export default MealItem;
