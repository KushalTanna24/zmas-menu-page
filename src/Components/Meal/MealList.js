import React, { Fragment } from "react";
import Data from "../../Data/Data";
import _ from "lodash";
import MealCard from "./MealCard";

const MealList = () => {
  const itemArray = Data.items;

  const grouppedItems = _.groupBy(itemArray, "restaurant_category_id");

  const mapped = Object.keys(grouppedItems).map((item) => {
    return (
      <Fragment key={item}>
        <div className="col-md-6">
          <h2 align="left" style={{ color: "#007bff" }}>
            {grouppedItems[item][0].restaurant_category_name}
          </h2>
          <br />
          {grouppedItems[item].map((item) => {
            return (
              <MealCard
                key={item.item_id}
                img={item.image_thumbnail_url}
                title={item.item_name}
                price={item.item_price}
              />
            );
          })}
          <br />
        </div>
      </Fragment>
    );
  });

  //   .map((item) => {
  //     return (
  //       <MealCard
  //         key={item.item_id}
  //         title={item.item_name}
  //         img={item.image_thumbnail_url}
  //         price={item.item_amount}
  //       />
  //     );
  //   });

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
  return <Fragment>{mapped}</Fragment>;
};

export default MealList;
