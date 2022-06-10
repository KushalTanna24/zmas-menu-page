import React from "react";
import Data from "../../Data/Data";

const Category = () => {
  const clickListHandler = (event) => {
    event.preventDefault();

    console.log(event.target.value);
  };

  const mappedCategories = Data.categories.map((title) => {
    return (
      <li
        className="list-group-item list-group-item-action"
        key={title.restaurant_category_id}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <a href="x" onClick={clickListHandler}>
          {title.restaurant_category_name}
        </a>
      </li>
    );
  });

  return (
    <ul className="list-group-item list-group-item-action">
      <h2>Category</h2>
      {mappedCategories}
    </ul>
  );
};

export default Category;
