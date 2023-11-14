"use client";
import { useState, useEffect } from "react";

export default function Dashboard({
  movies,
  upcomingMovies,
  trendingMovies,
  styles,
}) {
  const randomNumber = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  return (
    <div>
      {/*Client side search bar*/}
      <input type="text" placeholder="Search for Movies & TV Shows" />
      {
        movies.map((movie) => {
          {
            console.log(movie);
          }
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="random photo"
                className="img"
              />
            </div>
          );
        })[randomNumber(0, 15)]
      }
      {/* Trending Section*/}
      <div>
        <div>
          <h5>Trending</h5>
          <span>View All</span>
        </div>
        {trendingMovies
          .map((movie) => {
            {
              console.log(movie);
            }
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
      <div>
        <div>
          <h5>Upcoming</h5>
          <span>View All</span>
        </div>
        {upcomingMovies
          .map((movie) => {
            {
              console.log(movie);
            }
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
