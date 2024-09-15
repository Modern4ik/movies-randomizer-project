import React from "react";
import classes from "./RandomizeSelect.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RandomizeSelect = ({ options, defaultValue, changeFunc }) => {
  return (
    <select onChange={(event) => changeFunc(event.target.value)} className={classes.randomizeSelect} defaultValue={""}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value} name={opt.name}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
};

export default RandomizeSelect;
