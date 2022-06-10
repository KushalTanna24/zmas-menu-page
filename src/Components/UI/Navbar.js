import React from "react";

const Navbar = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event) => {
    props.onSearchChange(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={inputChangeHandler}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={submitHandler}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
