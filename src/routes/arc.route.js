const express = require('express');
const router = express.Router();
const arcController = require('../controllers/arc.controller');

router.get("/", arcController.getArcsByMangaID);

module.exports = router;