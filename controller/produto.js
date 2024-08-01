const Produtos = require("../model/produto");

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produtos.find({});
    res.send(produtos);
  } catch (erro) {
    console.log(erro);
    res.send({ msg: "[ERRO]: ERRO o listar", descricao: erro });
  }
};
