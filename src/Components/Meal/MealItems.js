import React from "react";
import Category from "../Categories/Category";
import MealList from "./MealList";

const MealItems = (props) => {
  return (
    <div className="row">
      {/* Starts the body part */}

      {/* beginning of category list */}
      <div className="col-md-2">
        <Category searchTerm={props.passSearchTerm} />
      </div>
      {/* end of category list */}

      {/* Right Div */}
      <div className="col-md-10">
        <MealList searchTerm={props.passSearchTerm} />
      </div>
    </div>
  );
};

export default MealItems;
