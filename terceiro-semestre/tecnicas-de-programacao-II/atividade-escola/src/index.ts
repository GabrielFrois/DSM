import express from "express"; 
import routes from './routes'; 
import dotenv from "dotenv"; 
import connect from "./models/connection"; 
dotenv.config(); 

const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.json()); 

connect(); 

app.listen(PORT, () => { 
console.log(`Rodando na porta ${PORT}`); 
}); 

app.use(routes); 
