import express from "express";
import ProductController from "../controllers/ProductController.js";

const routes = express.Router();

routes.get("/produtos", ProductController.listarProdutos);
routes.post("/produtos", ProductController.cadastrarProduto);
routes.delete("/produtos/:id", ProductController.removerProduto);

export default routes;
