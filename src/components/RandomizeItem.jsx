import React from 'react';
import classes from './components-styles/RandomizeItem.module.css';

const RandomizeItem = ({movieData}) => {
    return (
        <div className={classes.rnditem}>
            <h3 className={classes.header}>{movieData.name}</h3>
            <img className={classes.poster} src={movieData.poster.url} alt={`Постер фильма ${movieData.name}`} />
            <div className={classes.description}>{movieData.description}</div>
            <div className={classes.rating}>{`Рейтинг Кинопоиска: ${movieData.rating.kp.toFixed(1)}`}</div>
            <div>{`Год: ${movieData.year}`}</div>
            <div>{`Страна: ${movieData.countries[0].name}`}</div>
        </div>
    )
}

export default RandomizeItem;