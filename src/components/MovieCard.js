import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieCard(props) {
  return (
    <div className="MovieCard">
      <img
        className="MovieCardImg"
        src={props.data?.image?.medium}
        alt="movie poster"
      />
      <div>
        <h3>{props.data.name}</h3>
        <div className="cardDetails">
          <p>Language: {props?.data?.language}</p>
          <p>
            Rating: {Object.keys(props.data?.rating)[0]}{" "}
            {props.data?.rating[Object.keys(props.data.rating)[0]]} / 10
          </p>
          <p>
            Schedule: {props.data?.schedule?.days[0]} @{" "}
            {props.data?.schedule?.time}
          </p>
          <p>
            Network: {props?.data?.network?.name},{" "}
            {props?.data?.network?.country?.name}
          </p>
          <Link to={`/detail/${props?.data?.id}`}>Detail</Link>
        </div>
      </div>
    </div>
  );
}
