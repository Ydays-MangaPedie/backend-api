const mysqlssh = require("mysql2-ssh");
const helpers = require("../helpers/");
const config = require("./config");

exports.queryToDatabase = async (sql) => {
  mysqlssh.connect(config.ssh, config.db).then((client) => {
    client.query(sql, function (err, results, fields) {
      if (err) throw err;
      mysqlssh.close();
      return {results, error: err };
    });
  })
  .catch((error) => {
    return { results: [], error };
  });
};

exports.getMultiple = async (table, condition, page = 1) => {
  try {
    const offset = helpers.getOffset(page, config.listPerPage);
    const { results, error } = await this.queryToDatabase(
      `SELECT * FROM \`${table}\` LIMIT ${offset},${config.listPerPage} ${condition}`
    );
    if (error) {
      return { data: null, meta: null, error };
    }

    const data = helpers.emptyOrRows(results);
    const meta = { page };

    return {
      data,
      meta,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      meta: null,
      error,
    };
  }
};
