import React from "react";
const axios = require("axios");
import styles from "@/../../styles/home.module.css";

// access the REST API and pull movies
const getMovieData = () => {
  return axios.get("http://localhost:3001/api/movies").then((response) => {
    return response.data.results;
  });
};

const Home = async () => {
  let movieData = {
    image: "",
  }
  const movies = await getMovieData();

  movies.map((movie) => {
    movieData = {
      image: movie.poster_path
    }
  })
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
            <img src={`https://image.tmdb.org/t/p/original/${movieData.image}`} alt="random photo" />
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

