import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="column mt-4">
      <nav className="navbar navbar-expand p-2 bg-1">
        <div className="container-fluid bg-1 column">
          {/* this is the title for the navbar or website*/}
          <div className="collapse navbar-collapse bg-1" id="hornbar">
            {/* this "id" should match data-target above*/}
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">{/* returns you to the home page*/}</li>
            </ul>
            {/*  this below is the right aligned navbar items */}
            <ul className="navbar-nav me-auto"></ul>
            <ul className="navbar-nav bg-1">
              <Link
                className="font-brush btn mx-3 border-2 gradient bg-4 fs-1"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                to="/tumbler/pending"
                className="font-brush btn mx-3  border-2 bg-4 Row fs-1"
              >
                Pending
              </Link>
              <Link
                to="/tumbler"
                className="font-brush btn bg-4 mx-3  border-2 Row fs-1"
              >
                Gallery
              </Link>
              <Link
                to="/tumbler/new"
                className="font-brush btn mx-3 bg-4  border-2 Row fs-1"
              >
                Order
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
