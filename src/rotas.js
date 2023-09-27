const express = require("express");
const {
  buscarAluno,
  criarAluno,
  alterarAluno,
  deletarAluno,
} = require("./controladores/alunos");
const { verificarSenha } = require("./intermediadores/verificarSenha");

const rotas = express();

// criando a rota GET => buscar todos os alunos
// e executando a função controladora buscarAlunos
rotas.get("/alunos", verificarSenha, buscarAluno);

// criando a rota POST => criar um novo aluno
// e executando a função controladora criarAluno
rotas.post("/alunos", criarAluno);

// criando a rota PUT => alterar um aluno, necessário passar o ID
// e executando a função controladora alterarAluno
rotas.put("/alunos/:id", alterarAluno);

// criando a rota DELETE => deletar um aluno, necessário passar o ID
// e executando a função controladora deletarAluno
rotas.delete("/alunos/:id", deletarAluno);

module.exports = {
  rotas,
};
