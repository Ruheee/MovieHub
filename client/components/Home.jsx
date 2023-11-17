"use client";
import "../styles/Dashboard.scss";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Dashboard({ movies, upcomingMovies, trendingMovies }) {
  const [currentPage, setCurrentPage] = useState({
    initalMovies: 0,
    nextMovies: 8,
  });
  const randomNumber = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const changeMovies = () => {
    if (currentPage.nextMovies > 16) {
      setsetCurrentPage({ initalMovies: 0, nextMovies: 8 });
    }
    setCurrentPage(currentPage.initalMovies + 8, currentPage.nextMovies + 8);
  };

  return (
    <div className="dashboard-container">
      {/*Client side search bar*/}
      <input type="text" placeholder="Search for Movies & TV Shows" />
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
              onClick={() => changeMovies()}
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
          .slice(currentPage.initalMovies, currentPage.nextMovies)}
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
