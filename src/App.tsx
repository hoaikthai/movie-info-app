import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import MoviesPage from "src/pages/MoviesPage/MoviesPage";
import HomePage from "src/pages/HomePage/HomePage";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`App ${theme}`}>
          <Header />
          <Switch>
            <Route path="/movies/:id">
              <MoviesPage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
