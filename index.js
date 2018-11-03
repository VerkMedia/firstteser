import express from "express";
import data from "./data/DATA.json";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Your Server is running on port ${PORT}`);
  console.log(data);
});
