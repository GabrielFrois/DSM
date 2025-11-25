import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import connect from "./models/connection";
import AutorLivroModel from "./models/AutorLivroModel";
import { Autor, Livro, AutorLivro } from "./models";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);

var autoreslivros: Array<AutorLivroModel> = [];
var autorlivro = new AutorLivroModel("Machado de Assis", "Dom Casmurro");
autoreslivros.push(autorlivro);
var autorlivro = new AutorLivroModel("Machado de Assis", "Memórias Póstumas de Bras Cubas");
autoreslivros.push(autorlivro);
var autorlivro = new AutorLivroModel("Machado de Assis", "O Alienista");
autoreslivros.push(autorlivro);
var autorlivro = new AutorLivroModel("Carlos Drumond de Andrade", "Antologia Poética");
autoreslivros.push(autorlivro);
var autorlivro = new AutorLivroModel("Carlos Drumond de Andrade", "A Rosa do Povo");
autoreslivros.push(autorlivro);
var autorlivro = new AutorLivroModel("Clarice Lispector", "O Lustre");
autoreslivros.push(autorlivro);
var autorlivro = new AutorLivroModel("Clarice Lispector", "Um Sopro de Vida");
autoreslivros.push(autorlivro);

var w = 0;

autoreslivros.forEach(autorlivro => {
    (async () => {
        var doc = await Autor.findOne({ nome: autorlivro.autor }).exec();
        var doc1 = await Livro.findOne({ titulo: autorlivro.livro }).exec();
        if (doc != null && doc1 != null) {
            autorlivro.id = await fetch('http://localhost:3001/autorlivro', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    autor: doc._id,
                    livro: doc1._id
                })
            })
                .then(response => response.json()) 
                .then(data => {
                    autoreslivros[w].id = data._id
                    w++;
                    return data._id;
                })
                .catch(error => {
                    console.error(error);
                })
        }
    })();
});
