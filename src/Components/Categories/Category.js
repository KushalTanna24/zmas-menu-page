import React from "react";

const Category = () => {
  const clickListHandler = (event) => {
    event.preventDefault();

    console.log(event.target);
  };
  return (
    <ul className="list-group-item list-group-item-action">
      <h2>Category</h2>
      <li className="list-group-item list-group-item-action">
        <span onClick={clickListHandler}>Main Meals</span>
      </li>
      <li className="list-group-item list-group-item-action">
        <span onClick={clickListHandler}>Main Meals</span>
      </li>
      <li className="list-group-item list-group-item-action">
        <span onClick={clickListHandler}>Sea Food</span>
      </li>
      <li className="list-group-item list-group-item-action">
        <span onClick={clickListHandler}>Hot Drinks & Juices</span>
      </li>
      <li className="list-group-item list-group-item-action">
        <span onClick={clickListHandler}>Salad</span>
      </li>
      <li className="list-group-item list-group-item-action">
        <span onClick={clickListHandler}>Juices</span>
      </li>
    </ul>
  );
};

export default Category;
