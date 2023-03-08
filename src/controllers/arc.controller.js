const { getMultiple } = require("../services/database");

exports.getArcsByMangaID = async (req, res, next) => {
  try {
    const result = await getMultiple("arc",`WHERE idmanga = ${req.query.idmanga}`, req.query.page);
    res.json(result);
  } catch (err) {
    next(new Error(`Error while getting arcs \n ${err.message}`));
  }
};
