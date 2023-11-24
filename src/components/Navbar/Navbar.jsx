import React from "react";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <ul className={`${classes.navbar} ${props.className}`}>
      <li className={classes.navbarItem}>Home</li>
      <li className={classes.navbarItem}>New</li>
      <li className={classes.navbarItem}>Popular</li>
      <li className={classes.navbarItem}>Trending</li>
      <li className={classes.navbarItem}>Categories</li>
    </ul>
  );
};

export default Navbar;
