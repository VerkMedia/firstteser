import express from "express";
import data from "./data/DATA.json";

const app = express();
const PORT = 3000;

//path /
app.use(express.static("public"));
// path /images/
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/newItem", (req, res) => {
  res.send(`a post request with /newItem on port ${PORT}`);
});

app.put("/item", (req, res) => {
  res.send(`a put request with /item on port ${PORT}`);
});

app.delete("/item", (req, res) => {
  res.send(`a delete request with /item on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your Server is running on port ${PORT}`);
  // console.log(data);
});
