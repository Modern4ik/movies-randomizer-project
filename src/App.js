import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import MovieService from "./API/MovieService";

function App() {
  // MovieService.getRandomMovie();

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
