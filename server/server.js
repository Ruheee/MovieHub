const express = require("express");
const app = express();
const axios = require('axios');
const cors = require("cors");
const PORT = 3001;

//middleware
app.use(express.json());
app.use(cors());

app.get('/api/movies', (req,res) => {
  res.json({"users": ["Rui", "John", "Frank"]})
})


app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
