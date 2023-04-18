const { getMultiple } = require("../services/database");

exports.getManga = async (req, res, next) => {
  try {
    const result = await getMultiple("manga", "", req.query.page);
    res.json(result);
  } catch (err) {
    return next(new Error(`Error while getting mangas \n ${err.message}`));
  }
};

exports.getOneManga = async (req, res, next) => {
  try {
    const result = await this.queryToDatabase(
      `SELECT * FROM manga WHERE id = ${req.params.id}`
    );
    const data = helpers.emptyOrRows(result);
    if (data.length === 0) {
      res.status(404).json({ success: false, message: "Manga not found" });
    } else {
      res.json({ success: true, data: data[0] });
    }
  } catch (err) {
    return next(new Error(`Error while getting manga \n ${err.message}`));
  }
};
