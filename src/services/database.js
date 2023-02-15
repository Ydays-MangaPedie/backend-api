const mysql = require("mysql2/promise");
const helpers = require("../helpers/");
const config = require("./config");

exports.query = async (sql, params) => {
  try {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    return error;
  }
};

exports.getMultiple = async (table, condition, page = 1) => {
  const offset = helpers.getOffset(page, config.listPerPage);
  const rows = await query(
    `SELECT * FROM ${table} LIMIT ${offset},${config.listPerPage} ${condition}`
  );
  const data = helpers.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
};
