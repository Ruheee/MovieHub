"use client";
import { useState, useEffect } from "react";
import "../styles/Dashboard.scss";

export default function Dashboard({ movies, upcomingMovies, trendingMovies }) {
  const randomNumber = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="dashboard-container">
      {/*Client side search bar*/}
      <input type="text" placeholder="Search for Movies & TV Shows" />
      {
        movies.map((movie) => {
          return (

              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="random photo"
                className="main_img"
              />
            
          );
        })[randomNumber(0, 15)]
      }
      {/* Trending Section*/}
      <div className="home--movie--section">
        <div>
          <h5>Trending</h5>
          <span>View All</span>
        </div>
        {trendingMovies
          .map((movie) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="random photo"
                className="img"
              />
            );
          })
          .slice(10)}
      </div>
      {/* Upcoming Section*/}
      <div className="home--movie--section">
        <div>
          <h5>Upcoming</h5>
          <span>View All</span>
        </div>
        {upcomingMovies
          .map((movie) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="random photo"
                className="img"
              />
            );
          })
          .slice(10)}
      </div>
    </div>
  );
}
