import React from "react";
import classes from "./RandomizeButton.module.css";

const RandomizeButton = ({buttonText}) => {
  return <button className={classes.randomizeButton}>{buttonText}</button>;
};

export default RandomizeButton;