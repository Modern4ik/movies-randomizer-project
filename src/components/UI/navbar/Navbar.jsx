import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Link className={classes.navbar__mainLink} to="/main">
        <img
          className={classes.navbar__logo}
          src="logo.png"
          alt="Movie Randomizer Logo"
        />
        <span>
          Movies
          <br />
          Randomizer
        </span>
      </Link>

      <div className={classes.navbar__items}>
        <Link className={classes.navbar__item} to="/random">
          Randomize
        </Link>
        <Link className={classes.navbar__item} to="/about">
          About
        </Link>
        <Link className={classes.navbar__item} to="/contacts">
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
