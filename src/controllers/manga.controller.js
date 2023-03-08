const { getMultiple } = require("../services/database");

exports.getManga = async (req, res, next) => {
  try {
    const result = await getMultiple("manga","", req.query.page);
    res.json(result);
  } catch (err) {
   return next(new Error(`Error while getting mangas \n ${err.message}`));
  }
};