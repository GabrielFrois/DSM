import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import connect from "./models/connection";
import AutorModel from "./models/AutorModel";
import EditoraModel from "./models/EditoraModel";
import LivroModel from "./models/LivroModel";
import { Autor, Editora, Livro, AutorLivro } from "./models";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);

(async () => {
    var docs = await AutorLivro.find().exec();
    if (docs != null) {
        console.log("<< Livros Cadastrados >>");
        docs.forEach(async doc => {
            var autor = await Autor.findById(doc.autor);
            var livro = await Livro.findById(doc.livro);
            if (autor != null && livro != null) {
                var editora = await Editora.findById(livro.editora);
                if (editora != null) {
                    console.log("Livro:", livro.titulo, "- Autor: ", autor.nome, "- Páginas:", livro.paginas, "- Editora:", editora.razao)
                }
            }
        })
    }
})();