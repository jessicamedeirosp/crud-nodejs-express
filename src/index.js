// importando o express
const express = require("express");
let { alunos } = require("./bancoDeDados.js");
const { rotas } = require("./rotas.js");

// executando o express
const app = express();

//  Definindo o tipo dos dados de entrada e saida será no formato JSON
app.use(express.json());

// usando as rotas
app.use(rotas);

// Defina a porta que o servidor vai rodar
app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
