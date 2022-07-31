import React from "react";
// import { useState } from "react";

const RecipeItem = ({ meal }) => {
  return (
    <div className=" w-5/6 mt-5">
      <h2 className="text-2xl text-primary font-bold">{meal.strMeal}</h2>
      <div className="flex mt-4 items-center">
        <div className="w-2/3">
          {/* buat table */}
          <div className="flex flex-col mr-10">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-tertiary border-b">
                      <tr>
                        <th
                          scope="colSpan"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Ingredient
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Measure
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strIngredient1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strMeasure1}
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strIngredient2}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strMeasure2}
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strIngredient3}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strMeasure3}
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          4
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strIngredient4}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strMeasure4}
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          5
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strIngredient5}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {meal.strMeasure5}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/3 items-center">
          <img
            src={meal.strMealThumb}
            alt="meal thumb"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex mt-3 h-96">
        <div className="w-2/3 mr-14 ">
          <iframe
            src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
            frameborder="0"
            title="fafa"
            className="w-full h-full rounded"
          >
            Video
          </iframe>
        </div>
        <div className="flex items-center w-1/3">
          <p>{meal.strInstructions.slice(0, 400)}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
