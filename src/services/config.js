const config = {
  ssh: {
    host: process.env.SSH_HOST,
    user: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  listPerPage: 10,
};

module.exports = config;
