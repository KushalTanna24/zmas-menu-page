import React, { Fragment } from "react";
import Data from "../../Data/Data";
import groupBy from "lodash/groupBy";
import MealCard from "./MealCard";

const MealList = (props) => {
  const { categories, items: itemArray } = Data;

  const grouppedCategories = groupBy(categories, "restaurant_category_id");

  const ClickHandler = (event) => {
    console.log(event.target.offsetParent.id);
  };

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
        <div className="row">
          <div
            className="col-md-12"
            id={
              filteredItem.length > 0
                ? grouppedCategories[ID][0].restaurant_category_identity
                : ""
            }
            onClick={ClickHandler}
          >
            <h3>
              {filteredItem.length > 0 &&
                grouppedCategories[ID][0].restaurant_category_name}
            </h3>
          </div>
        </div>
        <div className="row">
          {filteredItem.map((item) => {
            const image =
              item.image_thumbnail_url === ""
                ? "https://monophy.com/media/dLmEzHozhc9WbTkwPa/monophy.gif"
                : item.image_thumbnail_url;
            return (
              <MealCard
                key={item.item_id}
                img={image}
                title={item.item_name}
                price={item.item_price}
              />
            );
          })}
        </div>
      </Fragment>
    );
  });

  // .map((item) => {
  //   return (
  //     <MealCard
  //       key={item.item_id}
  //       title={item.item_name}
  //       img={item.image_thumbnail_url}
  //       price={item.item_amount}
  //     />
  //   );
  // });

  //   return (
  //     <MealCard
  //       key={item.item_id}
  //       title={item.item_name}
  //       img={item.image_thumbnail_url}
  //       price={item.item_amount}
  //     />
  //   );

  //   const mappedItems = itemArray.map((item) => {
  //     return (
  //       <MealCard
  //         key={item.item_id}
  //         title={item.item_name}
  //         img={item.image_thumbnail_url}
  //         price={item.item_amount}
  //       />
  //     );
  //   });
  return <Fragment>{filteredItems}</Fragment>;
};

export default MealList;
