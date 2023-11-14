import React from "react";
const axios = require("axios");
import styles from "@/../../styles/home.module.css";
import Dashboard from "../../components/HomeSection";

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
      return response.data;
    });
};

const getUpcomingMovies = async () => {
  return await axios
    .get("http://localhost:3001/api/upcoming") 
    .then((response) => {
      return response.data;
    });
};

const Home = async () => {
  const movies = await getMovieData();
  const trendingMovies = await getTrendingMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <div className={styles.home}>
      <nav>
        <h1>Movie Hub</h1>
        <p>Home</p>
        <p>Movies</p>
        <p>TV Shows</p>
        <p>Upcoming</p>
      </nav>
      <section>
        <Dashboard movies={movies} styles={styles} trendingMovies={trendingMovies} upcomingMovies={upcomingMovies}/>
      </section>

      <div>
        <div>
          <button>Sign In</button>
          {/*Clerk Auth*/}
        </div>
        <div>
          <ul>
            <li>Drama</li>
            <li>Comedy</li>
            <li>Action</li>
            <li>Adventure</li>
            <li>Crime</li>
          </ul>
          <ul>
            <li>Google</li>
            <li>Apple Tv</li>
            <li>Amazon</li>
            <li>Disney</li>
            <li>Starz</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
