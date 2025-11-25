import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import connect from "./models/connection";
import EditoraModel from "./models/EditoraModel";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);

var editoras: Array<EditoraModel> = [];
var editora = new EditoraModel("Editora Atlas S/A", "45215118000175");
editoras.push(editora);
editora = new EditoraModel("Editora Abril S/A", "02183757000193");
editoras.push(editora);

var y = 0;

editoras.forEach(editora => {
    (async () => {
        editora.id = await fetch('http://localhost:3001/editora', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                razao: editora.razao,
                cnpj: editora.cnpj,
            })
        })
            .then(response => response.json())
            .then(data => {
                editoras[y].id = data._id
                y++;
                return data._id;
            })
            .catch(error => {
                console.error(error);
            })
    })();
});
