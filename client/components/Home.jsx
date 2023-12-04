"use client";
import "../styles/Dashboard.scss";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function Dashboard({ movies, upcomingMovies, trendingMovies }) {
  const [firstMovie, setFirstMovie] = useState(0);
  const [lastMovie, setLastMovie] = useState(8);
  const [search, setSearch] = useState("");
  const randomNumber = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const changeNumber = (event) => {
    event.preventDefault();
    if (lastMovie > 20) {
      return setFirstMovie(0), setLastMovie(8);
    }
    setFirstMovie(firstMovie + 8);
    setLastMovie(lastMovie + 8);
  };

  const setSearchValue = (e) => {
    setSearch(e);
    console.log(search);
  };

  return (
    <div className="dashboard-container">
      {/*Client side search bar*/}
      <input type="text" placeholder="Search for Movies & TV Shows" onChange={(e) => setSearchValue(e.target.value)}/>
      {
        movies.map((movie, i) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="random photo"
              className="main_img"
              key={i}
            />
          );
        })[randomNumber(0, 15)]
      }
      {/* Trending Section*/}
      <div className="home--movie--section">
        <div className="trending--arrow">
          <h5>Trending</h5>
          <div>
            <MdKeyboardArrowLeft className="arrow-left" />
            <MdKeyboardArrowRight
              className="arrow-right"
              onClick={() => changeNumber(event)}
            />
          </div>
        </div>
        {trendingMovies
          .map((movie, i) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="random photo"
                className="img"
                key={i}
              />
            );
          })
          .slice(firstMovie, lastMovie)}
      </div>
      {/* Upcoming Section*/}
      <div className="home--movie--section">
        <div>
          <h5>Upcoming</h5>
          <span>View All</span>
        </div>
        {upcomingMovies
          .map((movie, i) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="random photo"
                className="img"
                key={i}
              />
            );
          })
          .slice(0, 8)}
      </div>
    </div>
  );
}
