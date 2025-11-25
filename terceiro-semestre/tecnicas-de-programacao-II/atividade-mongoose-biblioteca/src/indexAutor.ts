import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import connect from "./models/connection";
import AutorModel from "./models/AutorModel";
import { Autor } from "./models";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);

var autores: Array<AutorModel> = [];
var autor = new AutorModel("Machado de Assis", "05958052802", "1939-06-21", "machado.assis@noalem.com.br");
autores.push(autor);
autor = new AutorModel("Carlos Drumond de Andrade", "08838165807", "1902-10-31", "carlos.andrade@noalem.com.br");
autores.push(autor);
autor = new AutorModel("Clarice Lispector", "38548322810", "1920-12-10", "clarice.lispector@noalem.com.br");
autores.push(autor);
autor = new AutorModel("Henrique Louro", "07494812857", "1965-11-01", "henrique.louro@fatec.sp.gov.br");
autores.push(autor);

var x = 0;
autores.forEach(autor => {
    (async () => {
        autor.id = await fetch('http://localhost:3001/autor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: autor.nome,
                cpf: autor.cpf,
                data_nasc: autor.data_nasc,
                email: autor.email
            })
        })
            .then(response => response.json())
            .then(data => {
                autores[x].id = data._id
                x++;
                return data._id;
            })
            .catch(error => {
                console.error(error);
            })
    })();
});
