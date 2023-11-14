const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const PORT = 3001;

//middleware
app.use(express.json());
app.use(cors());

app.get("/api/movies", async (req, res) => {
  await axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_crew=AND",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg5NGIwMmY5NDQzNjM2Y2Q5YmI4ZTQ2NTUxMTFkYSIsInN1YiI6IjY1NGQxYTU0MWFjMjkyN2IzMDJhMzYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrfQxgN7mLQ8b722bEFzyI3MCit_8pxwtDccy706IFQ",
        },
      }
    )
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => console.error(error));
});

app.get("/api/trending", async (req, res) => {
  axios
    .get("https://api.themoviedb.org/3/trending/movie/week?language=en-US", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg5NGIwMmY5NDQzNjM2Y2Q5YmI4ZTQ2NTUxMTFkYSIsInN1YiI6IjY1NGQxYTU0MWFjMjkyN2IzMDJhMzYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrfQxgN7mLQ8b722bEFzyI3MCit_8pxwtDccy706IFQ",
      },
    })
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => console.error(error));
});

app.get("/api/upcoming", async (req, res) => {
  axios
    .get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg5NGIwMmY5NDQzNjM2Y2Q5YmI4ZTQ2NTUxMTFkYSIsInN1YiI6IjY1NGQxYTU0MWFjMjkyN2IzMDJhMzYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrfQxgN7mLQ8b722bEFzyI3MCit_8pxwtDccy706IFQ",
      },
    })
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error));
});

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
