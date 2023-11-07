const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

//middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
