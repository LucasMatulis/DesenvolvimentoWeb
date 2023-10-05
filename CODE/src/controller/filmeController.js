import { buscarPorNome, listar, remover, salvar } from "../repository/filmeRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/filme', async (req, resp) => {
  try {
    let filme = req.body;

    if (!filme.nome)
      throw new Error('Nome do filme é obrigatório!');

    if (isNaN(filme.avaliacao) || filme.avaliacao > 10 || filme.avaliacao < 0)
      throw new Error('Avaliação inválida!');

    // outras validações

    let r = await salvar(filme);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});


endpoints.get('/filme', async (req, resp) => {
  try {
    let r = await listar();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})




endpoints.get('/filme/busca', async (req, resp) => {
  try {
    let nome = req.query.nome;
    let r = await buscarPorNome(nome);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})



endpoints.delete('/filme/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let linhasAfetadas = await remover(id);
    
    if (linhasAfetadas == 0)
      throw new Error('Filme não encontrado!');

    resp.send();
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;