import React from "react";
import MovieCard from "./MovieCard";

export default function Home(props) {
  return (
    <div>
      {props.shows ? (
        props.genreSets.map((genre) => {
          return (
            <div key={genre}>
              <h2 className="genreHeading" align="left">
                {genre}
              </h2>

              <div className="MovieCardDiv">
                {props.searchTerm.length === 0
                  ? props.shows
                      ?.filter((show) => show?.genres?.includes(genre))
                      .map((dat) => (
                        <MovieCard key={dat?.id + genre} data={dat} />
                      ))
                  : props.shows
                      ?.filter((s) => s?.show?.genres?.includes(genre))
                      .map((dat) => (
                        <MovieCard key={dat?.show?.id + genre} data={dat.show} />
                      ))}
              </div>
            </div>
          );
        })
      ) : (
        <h3>No results found</h3>
      )}
    </div>
  );
}
