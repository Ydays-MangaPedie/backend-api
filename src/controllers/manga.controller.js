const { getMultiple } = require("../services/database");

exports.getManga = async (req, res, next) => {
  try {
    const result = await getMultiple("manga","", req.query.page);
    if (result.error) {
    return next(new Error(`Error while getting mangas ${result.error.message}`));
    }
    res.json(result);
  } catch (err) {
   return next(new Error(`Error while getting mangas \n ${err.message}`));
  }
};