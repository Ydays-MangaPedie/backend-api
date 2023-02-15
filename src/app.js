const mysql = require("mysql2");
const express = require("express");
const apiRouter = require("./routes");
const errorHandler = require("./middlewares/errorHandling");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/v1", apiRouter);
app.use(errorHandler);


const con = mysql.createConnection({
  host: "145.239.70.179",
  user: "user",
  password: "zWi27j?47",
  database: "mangapedieDB",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {
  console.log(`API Serveur listening at http://localhost:${port}`);
});
