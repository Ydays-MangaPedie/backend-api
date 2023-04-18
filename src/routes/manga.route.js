const express = require("express");
const router = express.Router();
const mangaController = require("../controllers/manga.controller");

router.get("/", mangaController.getManga);
router.get("/one/", mangaController.getOneManga);
module.exports = router;
