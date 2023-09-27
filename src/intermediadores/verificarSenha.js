function verificarSenha(req, res, next) {
  // pega senha da query
  const { senha } = req.query;

  // verifica se a senha passada é diferente da senha correta
  if (senha !== "1234") {
    // devolvendo resposta de erro para o cliente
    return res.status(401).json({ mensagem: "senha incorreta" });
  }

  // avança para as funções controladoras
  next();
}

// exportando função verificarSenha
module.exports = {
  verificarSenha,
};
