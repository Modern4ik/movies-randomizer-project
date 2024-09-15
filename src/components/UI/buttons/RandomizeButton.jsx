import React from "react";
import classes from "./RandomizeButton.module.css";

const RandomizeButton = ({buttonText, ...props}) => {
  return <button {...props} className={classes.randomizeButton}>{buttonText}</button>;
};

export default RandomizeButton;