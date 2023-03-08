const { getMultiple } = require("../services/database");

exports.getCharactersByMangaID = async (req, res, next) => {
  try {
    const result = await getMultiple(
      "personnage",
      `WHERE idmanga = ${req.query.idmanga}`,
      req.query.page
    );
    res.json(result);
  } catch (err) {
    next(new Error(`Error while getting characters \n ${err.message}`));
  }
};
