import express from "express";
import dotenv from "dotenv";
import cidadeRouter from "./routes/cidade";
import pool from "./controllers/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/cidade", cidadeRouter);

// Criar a VIEW cidade_view ao iniciar o servidor
async function criarViews() {
  const createViewQuery = `
    CREATE OR REPLACE VIEW cidade_view AS
    SELECT
      id,
      nome,
      ST_X(ST_Centroid(geom)) AS lon,
      ST_Y(ST_Centroid(geom)) AS lat
    FROM cidades;
  `;

  try {
    await pool.query(createViewQuery);
    console.log("VIEW cidade_view criada ou atualizada com sucesso.");
  } catch (error) {
    console.error("Erro ao criar VIEW cidade_view:", error);
  }
}

criarViews(); // chama ao iniciar

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
