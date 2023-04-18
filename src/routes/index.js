const express = require("express");
const router = express.Router();
const arcRouter = require("./arc.route");
const mangaRouter = require("./manga.route");
const characterRouter = require("./character.route");

router.use("/character", characterRouter);
router.use("/manga", mangaRouter);
router.use("/arc", arcRouter);

module.exports = router;
