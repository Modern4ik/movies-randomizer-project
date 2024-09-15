import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-container">
      <div>
        <h1>Добро пожаловать в Movies Randomizer!</h1>
        <p className="main-container__text">
          Не знаете что посмотреть вечером, тогда вы обратились по адресу!
          <br />
          Здесь вы сможете подобрать случайный фильм/сериал/мультфильм/анимэ и
          избавиться от муки выбора!
        </p>
      </div>
      <Link className="main-page__link" to="/random">
        Попробовать сейчас!
      </Link>
    </div>
  );
};

export default MainPage;
