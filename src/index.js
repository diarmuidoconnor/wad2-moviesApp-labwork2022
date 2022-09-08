import React from "react";
import {createRoot} from "react-dom/client";
import HomePage from "./pages/homePage";
import sample from './stproes/sampleData'

const movies = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
      <HomePage movies={movies} />
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );