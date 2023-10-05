import { con } from "./connection.js";


export async function salvar(filme) {
  const comando = `
      INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                    VALUES (?, ?, ?, ?, ?)
  `

  const [info] = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])
  filme.id = info.insertId;
  
  return filme;
}

export async function listar() {
  const comando = `
     SELECT id_filme        as id,
            nm_filme        as nome,
            ds_sinopse      as sinopse,
            vl_avaliacao    as avaliacao,
            dt_lancamento   as lancamento,
            bt_disponivel   as disponivel,
            img_filme       as imagem
       FROM tb_filme
  `

  const [linhas] = await con.query(comando);
  return linhas;
}


export async function buscarPorNome(nome) {
  const comando = `
     SELECT id_filme        as id,
            nm_filme        as nome,
            ds_sinopse      as sinopse,
            vl_avaliacao    as avaliacao,
            dt_lancamento   as lancamento,
            bt_disponivel   as disponivel,
            img_filme       as imagem
       FROM tb_filme
      WHERE nm_filme like ?
  `

  const [linhas] = await con.query(comando, ['%'+nome+'%']);
  return linhas;
}


export function alterar(id, filme) {

}


export async function remover(id) {
  const comando = 'DELETE FROM tb_filme WHERE id_filme = ?'

  const [info] = await con.query(comando, [id])
  return info.affectedRows;
}
