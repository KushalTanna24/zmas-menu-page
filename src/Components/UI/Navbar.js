import React from "react";

const Navbar = () => {
  const submitHandler = (event) => {
    event.preventDefault();
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
