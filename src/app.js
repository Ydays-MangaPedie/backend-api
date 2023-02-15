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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {
  console.log(`API Serveur listening at http://localhost:${port}`);
});
