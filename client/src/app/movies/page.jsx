import React from "react";
const axios = require("axios");

const getMovieData = async () => {
  axios.get("http://localhost:3001/api/movies")
  .then((res) => {
    return res.data
  })
}

export default async function Movies() {
  const movies = await getMovieData();
  console.log(typeof movies, "typeof")
  return <div>page</div>;
}
