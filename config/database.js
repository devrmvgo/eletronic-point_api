module.exports = {
  // Credencias do bando de dados
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "docker",
  DB: "eletronic-point_database",
  dialect: "postgres",

  // Configuração do pool de conexão Sequelize
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};