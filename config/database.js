module.exports = {
  // Database credentials
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "docker",
  DB: "eletronic-point_database",
  dialect: "postgres",

  // Pool settings of Sequelize connection
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};