import "./App.css";
import React, { useEffect, useState } from "react";
import Detail from "./components/Detail";
import Home from "./components/Home";
import debounce from "lodash.debounce";
import TopHeader from "./components/TopHeader";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [shows, setShows] = useState([]);
  const [genreSets, setGenreSets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getShowDetail();
  }, []);

  const getShowDetail = () => {
    let genres = [];
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {

        data.map((show) => {
          show.genres.map((genre) => {
            if (!genres.includes(genre)) genres.push(genre);
          });
        });
        setShows(data);
        setGenreSets(genres);
      });
  };

  const handleSearchInput = () => {
    let genres = [];
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        data.map((s) => {
          s.show.genres.map((genre) => {
            if (!genres.includes(genre)) genres.push(genre);
          });
        });
        if (searchTerm.length) {
          setShows(data);
          setGenreSets(genres);
        }
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length === 0) getShowDetail();
  };

  const debounceOnChange = React.useCallback(debounce(handleSearchInput, 400), [
    searchTerm,
  ]);

  useEffect(() => {
    debounceOnChange();
    return debounceOnChange.cancel;
  }, [searchTerm, debounceOnChange]);

  return (
    <div className="App">
      <Router>
        <TopHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleChange={handleChange}
        />
        <Switch>
          <Route exact path="/detail/:id" component= {Detail}>
            {/* <Detail /> */}
          </Route>
          <Route exact path="/">
            <Home shows={shows} genreSets={genreSets} searchTerm={searchTerm} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
