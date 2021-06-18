const express = require("express");
const cors = require("cors");

const app = express();

// Libera acesso a todos os dominios externos
app.use(cors());
// Permite o envio de dados na requisição com formato json
app.use(express.json());

// Acesso aos models e conexão sequelize
const db = require("./app/models");
db.sequelize.sync();

// Rota raiz
app.get("/", (req, res) => {
  res.json({ message: "welcome to eletronmic point api" });
});

// Rotas da aplicação
app.use('/', require("./start/routes.js"));

// Altera porta da aplicação
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}.`);
});