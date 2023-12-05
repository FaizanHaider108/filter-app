import express from "express";
import cors from "cors";
import { Users } from "./Users.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  if (!q) {
    // Handle the case when query parameter is not provided
    return res.send(Users.splice(0, 20));
  }

  const keys = ["first_name", "last_name", "email"];

  const search = (users) => {
    return users.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase()))
    );
  };

  res.send(search(Users).splice(0, 20));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
