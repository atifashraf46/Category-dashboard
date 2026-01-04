module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3"
    },
    useNullAsDefault: true,

    migrations: {
      directory: "./migrations"
    }
  }
};