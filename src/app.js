const express = require("express");
const apiRouter = require("./routes");
const errorHandler = require("./middlewares/errorHandling");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/v1", apiRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`API Serveur listening at http://localhost:${port}`);
});
