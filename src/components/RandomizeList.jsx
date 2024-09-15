import React from "react";
import RandomizeItem from "./RandomizeItem";
import classes from "./components-styles/RandomizeList.module.css";

const RandomizeList = ({ moviesData, loadFunc}) => {
  console.log('Зашли');
  console.log(moviesData);

  return (
    <div className={classes.rndlist}>
      {moviesData.map((movieData) => {
        return <RandomizeItem key={movieData.id} movieData={movieData} loadFunc={loadFunc}/>;
      })}
    </div>
  );
};

export default RandomizeList;
