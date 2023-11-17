import React from "react";

// SCSS

//libraries used
const axios = require("axios");

// access to components
import Dashboard from "../../components/Home";

// access the REST API and pull movies
const getMovieData = async () => {
  return await axios
    .get("http://localhost:3001/api/movies")
    .then((response) => {
      return response.data.results;
    });
};

const getTrendingMovies = async () => {
  return await axios
    .get("http://localhost:3001/api/trending")
    .then((response) => {
      return response.data.results;
    });
};

const getUpcomingMovies = async () => {
  return await axios
    .get("http://localhost:3001/api/upcoming")
    .then((response) => {
      return response.data.results;
    });
};

const Home = async () => {
  const movies = await getMovieData();
  const trendingMovies = await getTrendingMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <div>
      <section>
        <Dashboard
          movies={movies}
          trendingMovies={trendingMovies}
          upcomingMovies={upcomingMovies}
        />
      </section>
    </div>
  );
};

export default Home;
