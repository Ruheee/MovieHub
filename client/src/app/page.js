import React from "react";
const axios = require("axios");
import styles from "@/../../styles/home.module.css";

// access the REST API and pull movies
const getMovieData = () => {
  return axios.get("http://localhost:3001/api/movies").then((response) => {
    return response.data.results;
  });
};

const getTrendingMovies = () => {};

const Home = async () => {
  const movies = await getMovieData();

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
        {/*Client side search bar*/}
        <img src="" alt="Random Movie Image" />
        {/* Trending Section*/}
        <div>
          <div>
            <h5>Trending</h5>
            <span>View All</span>
          </div>
          <div>
            {movies.map((movie) => {
              return (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt="random photo"
                  className={styles.img}
                />
              );
            }).slice(8)}
          </div>
        </div>
        {/* Upcoming Section*/}
        <div>
          <div>
            <h5>Upcoming</h5>
            <span>View All</span>
          </div>
          <div>
            <img src="" alt="random photo" />
          </div>
        </div>
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
