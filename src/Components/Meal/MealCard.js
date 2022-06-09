import React, { Fragment } from "react";

const MealCard = (props) => {
  return (
    <Fragment>
      <div className="col-md-6">
        <h2 align="left" style={{ color: "#007bff" }}>
          {props.catTitle}
        </h2>
        <br />
        <div className="card">
          <div className="card-body">
            <img
              src={props.img}
              alt={props.title}
              align="right"
              height={"150px"}
              width={"150px"}
            />
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text" style={{ color: "red" }}>
              INR {props.price}
            </p>
          </div>
        </div>
        <br />
      </div>
    </Fragment>
  );
};

export default MealCard;
