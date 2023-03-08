const mysqlssh = require("mysql2-ssh");
const helpers = require("../helpers/");
const config = require("./config");

exports.queryToDatabase = async (sql) => {
  try {
    const connection = await mysqlssh.connect(config.ssh, config.db);
    const [results,] = await connection.execute(sql);
    mysqlssh.close();
    return results
  } catch (error) {
    return error;
  }
};

exports.getMultiple = async (table, condition, page = 1) => {
  try {
    const offset = helpers.getOffset(page, config.listPerPage);
    const results = await this.queryToDatabase(
      `SELECT * FROM ${table} ${condition} LIMIT ${offset},${config.listPerPage}`
    );
console.log(results);
    const data = helpers.emptyOrRows(results);
    const meta = { page };

    return {
      data,
      meta,
    };
  
  } catch (error) {
    return error;
  }
};
