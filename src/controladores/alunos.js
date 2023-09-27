let { alunos } = require("../bancoDeDados.js");

function buscarAluno(req, res) {
  return res.status(200).json(alunos);
}

function criarAluno(req, res) {
  // pegando os dados do body
  const { nome, email, senha } = req.body;

  // verificando se os dados existem
  if (!nome || !email || !senha) {
    // devolvendo resposta de erro cliente
    return res
      .status(400)
      .json({ mensagem: "Todos os campos devem ser preenchido" });
  }

  // verificando se o email já existe
  const emailJaExiste = alunos.find((aluno) => aluno.email === email);
  if (emailJaExiste) {
    // devolvendo resposta de erro cliente
    return res.status(400).json({ mensagem: "Email já existe" });
  }

  //  pegando o ultimo id cadastrado
  const maxId = alunos.reduce((acc, aluno) =>
    acc > aluno.id ? acc : aluno.id
  );

  // adicionando no array alunos o novo aluno
  alunos.push({
    id: maxId + 1,
    nome,
    email,
    senha,
  });

  // devolvendo resposta de sucesso
  return res.status(201).send();
}

function alterarAluno(req, res) {
  // pegando os dados do body
  const { nome, email, senha } = req.body;
  // pegando o id dos parametros
  const { id } = req.params;

  // verificando se aluno existe
  let alunoExiste = alunos.find((aluno) => aluno.id === Number(id));
  if (!alunoExiste) {
    // devolvendo resposta de erro cliente
    return res.status(400).json({ mensagem: "Aluno não encontrado" });
  }

  // verificando se os dados existem
  if (!nome || !email || !senha) {
    // devolvendo resposta de erro cliente
    return res
      .status(400)
      .json({ mensagem: "Todos os campos devem ser preenchido" });
  }

  // buscando alunos com o mesmo email
  const emailJaExiste = alunos.find(
    (aluno) => aluno.email === email && aluno.id !== Number(id)
  );

  // verificando se email já existe
  if (emailJaExiste) {
    // devolvendo resposta de erro cliente
    return res.status(400).json({ mensagem: "Email já existe" });
  }

  // alterando o aluno
  alunos = alunos.map((aluno) => {
    if (Number(id) === aluno.id) {
      return {
        id: Number(id),
        nome,
        email,
        senha,
      };
    } else {
      return aluno;
    }
  });

  // devolvendo resposta de sucesso
  return res.status(204).send();
}

function deletarAluno(req, res) {
  // pegando o id dos parametros
  const { id } = req.params;

  // buscando o index (indice) do aluno
  const alunoIndex = alunos.findIndex((aluno) => aluno.id === Number(id));

  // verificando se o aluno existe
  if (alunoIndex == -1) {
    // devolvendo resposta de erro cliente
    return res.status(400).json({ mensagem: "Aluno não encontrado" });
  }

  // removendo aluno de alunos
  alunos.splice(alunoIndex, 1);

  // devolvendo resposta de sucesso
  return res.status(204).send();
}

// exportando funções controladoras
module.exports = {
  buscarAluno,
  criarAluno,
  alterarAluno,
  deletarAluno,
};
