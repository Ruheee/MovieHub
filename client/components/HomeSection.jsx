"use client";
import { useState, useEffect } from "react"

export default function Dashboard({ movies, upcomingMovies, trendingMovies, styles }) {
  return (
    <div>
      {/*Client side search bar*/}
      <img src="" alt="Random Movie Image" />
      {/* Trending Section*/}

      <div>
        <div>
          <h5>Trending</h5>
          <span>View All</span>
        </div>
        {movies.map((movie) => {
          {console.log(movie)}
          return (
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="random photo" className={styles.img}/>
            </div>
          );
        }).slice(10)}
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
    </div>
  );
}
