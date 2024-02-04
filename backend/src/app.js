import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDataBase();

conexao.once("open", () => {
    console.log("Conexao com o banco estabelecida");
});

conexao.on("error", (erro) => {
    console.error('erro na conexão' + erro);
});

const app = express();
routes(app);

app.get('/', (req, res) => {
    res.send("teste2")
})

export default app;