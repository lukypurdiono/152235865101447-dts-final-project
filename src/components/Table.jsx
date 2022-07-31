import React from "react";

const Table = ({ ing }) => {
  return (
    <>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          1
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {ing.strIngredient1}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {ing.strMeasure1}
        </td>
      </tr>
    </>
  );
};

export default Table;
