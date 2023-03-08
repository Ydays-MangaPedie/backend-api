const express = require('express');
const router = express.Router();
const mangaController = require('../controllers/manga.controller');

router.get("/", mangaController.getManga);

module.exports = router;