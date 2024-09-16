import React from "react";
import "./styles/App.css";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
