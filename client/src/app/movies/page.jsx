import React from "react";
const axios = require("axios");

const getMovieData = () => {
  return axios.get("http://localhost:3001/api/movies")
  .then((response) => {
    return response.data.results;
  });
};

const Movies = async () => {
  const movies = await getMovieData();
  return <div>{movies.map((movie, i) => {
    return (
      <div key={i}>
        {movie.id}
      </div>
    )
  })}</div>;
};

export default Movies;
