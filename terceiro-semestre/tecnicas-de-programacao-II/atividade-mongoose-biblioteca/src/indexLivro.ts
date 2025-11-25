import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import connect from "./models/connection";
import AutorModel from "./models/AutorModel";
import EditoraModel from "./models/EditoraModel";
import LivroModel from "./models/LivroModel";
import { Autor, Editora, Livro } from "./models";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);

var livros: Array<LivroModel> = [];
var livro = new LivroModel("Dom Casmurro", 208, "45215118000175");
livros.push(livro);
var livro = new LivroModel("Memórias Póstumas de Bras Cubas", 192, "45215118000175");
livros.push(livro);
var livro = new LivroModel("O Alienista", 104, "45215118000175");
livros.push(livro);
var livro = new LivroModel("O Lustre", 104, "02183757000193");
livros.push(livro);
var livro = new LivroModel("Um Sopro de Vida", 159, "02183757000193");
livros.push(livro);
var livro = new LivroModel("Antologia Poética", 368, "02183757000193");
livros.push(livro);
var livro = new LivroModel("A Rosa do Povo", 238, "02183757000193");
livros.push(livro);

var w = 0;

livros.forEach(livro => {
    (async () => {
        var doc = await Editora.findOne({ cnpj: livro.editora }).exec();
        if (doc != null) {
            livro.id = await fetch('http://localhost:3001/livro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    editora: doc._id,
                    titulo: livro.titulo,
                    paginas: livro.paginas
                })
            })
                .then(response => response.json())
                .then(data => {
                    livros[w].id = data._id
                    w++;
                    return data._id;
                })
                .catch(error => {
                    console.error(error);
                })
        }
    })();
});