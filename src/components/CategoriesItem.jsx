import React from "react";

const CategoriesItem = ({ categoriItem }) => {
  return (
    <div className="flex items-center w-1/4 mb-3" key={categoriItem.idCategory}>
      <img
        src={categoriItem.strCategoryThumb}
        alt="categori"
        className="w-2/6"
      />
      <div>
        {/* strCategory, strCategoryThumb, strCategoryDescription */}
        <strong>{categoriItem.strCategory}</strong>
      </div>
    </div>
  );
};

export default CategoriesItem;
