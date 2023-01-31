import React, { useEffect, useParams, useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Detail({ match }) {
  const [movieDetail, setMovieDetail] = useState();

  const getShowDetail = (id) => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data);
      });
  };

  useEffect(() => {
    getShowDetail(match.params.id);
  }, [match.params.id]);

  return (
    <div className="MovieDetail">
      <img src={movieDetail?.image?.medium} alt="Show image" />
      <div className="textDetail">
        <div className="Movietitle">
        <h1>
          {movieDetail?.name} (
          {movieDetail?.rating[Object.keys(movieDetail?.rating)[0]]}/ 10)
        </h1>
        <Rating className="rating"
          readonly
          initialValue={movieDetail?.rating[Object.keys(movieDetail?.rating)[0]] / 2}
          allowFraction
        />
        </div>
        <p>
          <span>Language: {movieDetail?.language}</span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: movieDetail?.summary }}></div>
      </div>
    </div>
  );
}
