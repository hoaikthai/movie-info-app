import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import ThemeContext from "./context/ThemeContext";
import MoviesPage from "src/pages/MoviesPage/MoviesPage";
import HomePage from "src/pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`App ${theme}`}>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/movies/:id">
              <MovieDetailPage />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
