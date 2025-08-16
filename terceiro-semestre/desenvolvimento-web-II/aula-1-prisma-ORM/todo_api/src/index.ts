import express from "express";
import dotenv from "dotenv";
import path from "path"; // para resolver caminhos
import { taskRoutes } from "./routes/taskRoutes";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));

// Middleware para ler JSON no corpo da requisição
app.use(express.json());

// Servir arquivos estáticos da pasta "views" (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, "views")));

// Rota para carregar o HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Rotas da API
app.use("/tasks", taskRoutes);
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
