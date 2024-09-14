import React from "react";
import RandomizeSelect from "../components/UI/selects/RandomizeSelect";
import {
  jenreOptions,
  scoreOptions,
  typeOptions,
} from "../filterOptions/randomizeOptions";
import RandomizeButton from "../components/UI/buttons/RandomizeButton";

const Randomizer = () => {
  return (
    <form>
      <RandomizeSelect options={typeOptions} defaultValue={"By type"} />
      <RandomizeSelect options={jenreOptions} defaultValue={"By jenre"} />
      <RandomizeSelect options={scoreOptions} defaultValue={"By score"} />
      <RandomizeButton buttonText={"Get movies!"}></RandomizeButton>
    </form>
  );
};

export default Randomizer;
