import React, { Fragment } from "react";
import groupBy from "lodash/groupBy";
import Data from "../../Data/Data";
import { Link } from "react-scroll";

const Category = (props) => {
  const clickListHandler = (event) => {
    event.preventDefault();

    console.log(event.target.id);
  };

  const { categories, items: itemArray } = Data;

  const grouppedCategories = groupBy(categories, "restaurant_category_id");
  const grouppedItems = groupBy(itemArray, "restaurant_category_id");

  const filteredItems = Object.keys(grouppedItems).map((ID) => {
    const filteredItem = grouppedItems[ID].filter((item) => {
      return (
        item.restaurant_category_name
          .toLowerCase()
          .includes(props.searchTerm.toLowerCase()) ||
        item.item_name.toLowerCase().includes(props.searchTerm.toLowerCase())
      );
    });

    return (
      <Fragment key={ID}>
        {/* {console.log("this", grouppedItems[ID][0].restaurant_category_id)} */}
        {/* {console.log(ID)} */}
        <Link
          className="list-group-item list-group-item-action"
          onClick={clickListHandler}
          id={
            filteredItem.length > 0
              ? "#" + grouppedCategories[ID][0].restaurant_category_identity
              : "#"
          }
          to={
            filteredItem.length > 0
              ? grouppedCategories[ID][0].restaurant_category_identity
              : ""
          }
          duration={500}
          smooth={true}
        >
          {filteredItem.length > 0 &&
            grouppedCategories[ID][0].restaurant_category_name}
        </Link>
      </Fragment>
    );
  });
  // const mappedCategories = Data.categories.map((title) => {
  //   return (
  //     <li
  //       className="list-group-item list-group-item-action"
  //       key={title.restaurant_category_id}
  //       style={{ cursor: "pointer", textDecoration: "none" }}
  //     >
  //       <a href="x" onClick={clickListHandler}>
  //         {title.restaurant_category_name}
  //       </a>
  //     </li>
  //   );
  // });

  return (
    <ul className="list-group-item list-group-item-action">
      <h2>Category</h2>
      {filteredItems}
    </ul>
  );
};

export default Category;
