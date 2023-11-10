const axios = require("axios");

const movie = {
  
}

const getMovieData = () => {
  return axios.get("http://localhost:3001/api/movies")
  .then((response) => {
    return response.data;
  });
};

export default { movie }