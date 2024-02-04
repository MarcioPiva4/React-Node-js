import Products from "../models/product.js";

class ProductController {
  static async listarProdutos(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    try {
      const listaProdutos = await Products.find({});
      res.status(200).json(listaProdutos);
    } catch (error) {
      res.status(500).json({ message: "erro ao lista os produtos" + error });
    }
  }

  static async cadastrarProduto(req, res) {
    const dados = req.body
    try{
      const produtoCriado = await Products.create(dados);
      res.status(200).json({ message: "Produto criado com sucesso"})
    } catch(error) {
      res.status(500).send("Erro ao cadastrar um produto " + error)
    }
  }

  static async removerProduto(req, res) {
    const id = req.params.id
    try{
      await Products.findByIdAndDelete(id);
      res.status(200).json({message: "Produto deletado com sucesso"})
    } catch (erro) {
      res.status(500).send("Erro ao deletar um produto " + erro)
    }
  }

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
}

export default ProductController;
