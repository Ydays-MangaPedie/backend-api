const { getMultiple } = require("../services/database");

exports.getArcsByMangaID = async (req, res, next) => {
  try {
    res.json(await getMultiple("arc",`WHERE idManga = ${req.query.idmanga}`, req.query.page));
  } catch (err) {
    next(new Error(`Error while getting arcs \n ${err.message}`));
  }
};
