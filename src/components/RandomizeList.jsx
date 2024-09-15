import React from "react";
import RandomizeItem from "./RandomizeItem";
import classes from './components-styles/RandomizeList.module.css';

const RandomizeList = ({moviesData}) => {
    console.log(moviesData);
    return (
        <div className={classes.rndlist}>
            {moviesData.map((movieData) => {
                return <RandomizeItem movieData={movieData} />
            })}
        </div>
    )
}

export default RandomizeList;