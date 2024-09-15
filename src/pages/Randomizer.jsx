import React, { useState } from "react";
import RandomizeSelect from "../components/UI/selects/RandomizeSelect";
import {
  countOptions,
  jenreOptions,
  ratingOptions,
  typeOptions,
} from "../filterOptions/randomizeOptions";
import RandomizeButton from "../components/UI/buttons/RandomizeButton";
import RandomizeLoader from "../components/UI/loaders/RandomizeLoader";
import MovieService from "../API/MovieService";
import RandomizeList from "../components/RandomizeList";

const Randomizer = () => {
  const [type, setType] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [countToShow, setCountToShow] = useState(0);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isPostersLoaded, setIsPostersLoaded] = useState(false);

  const loadMovies = async (event) => {
    event.preventDefault();

    if (isPostersLoaded) setIsPostersLoaded(false);

    setIsMoviesLoading(true);

    const moviesData = await MovieService.getRandomMovie(type, genre, rating, countToShow);
    setMovies(moviesData);

    setIsMoviesLoading(false);
  };

  return (
    <div>
      <form>
        <RandomizeSelect
          options={typeOptions}
          defaultValue={"По типу"}
          changeFunc={setType}
        />
        <RandomizeSelect
          options={jenreOptions}
          defaultValue={"По жанру"}
          changeFunc={setGenre}
        />
        <RandomizeSelect
          options={ratingOptions}
          defaultValue={"По рейтингу"}
          changeFunc={setRating}
        />
        <RandomizeSelect
          options={countOptions}
          defaultValue={"Кол-во для отображения"}
          changeFunc={setCountToShow}
        />
        <RandomizeButton
          onClick={loadMovies}
          buttonText={"Подобрать!"}
        ></RandomizeButton>
      </form>
      {isMoviesLoading && !isPostersLoaded ? <RandomizeLoader /> : <RandomizeList moviesData={movies} loadFunc={setIsPostersLoaded}/>}
    </div>
  );
};

export default Randomizer;
