const { getMultiple } = require("../services/database");

exports.getCharactersByMangaID = async (req, res, next) => {
  try {
    const result = await getMultiple(
      "personnages",
      `WHERE id_manga = ${req.query.id_manga}`
    );
    res.json(result);
  } catch (err) {
    next(new Error(`Error while getting characters \n ${err.message}`));
  }
};
