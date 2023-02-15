const express = require("express");
const router = express.Router();
const arcRouter = require("./arc.route");

router.use("/arc", arcRouter);

module.exports = router;