const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const apiRouter = require("./routes");
const errorHandler = require("./middlewares/errorHandling");
app.use(express.json());
app.use("/api/v1", apiRouter);
app.use(errorHandler);

  
app.listen(port, () => {
  console.log(`API Serveur listening at http://localhost:${port}`);
});
