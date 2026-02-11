import 'dotenv/config'; 
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import Jogo, { IJogo } from './models/Jogo';

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

// Conexão com o MongoDB
const mongoURI = process.env.URL as string;

mongoose.connect(mongoURI)
.then(() => {
    console.log('Conectado ao MongoDB!');
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

// GET
app.get('/jogos', async (req: Request, res: Response): Promise<Response> => {
    try {
        const jogos: IJogo[] = await Jogo.find();
        return res.status(200).json(jogos);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar jogos', error });
    }
});

// POST
app.post('/jogos', async (req: Request, res: Response): Promise<Response> => {
    try {
        const novoJogo = new Jogo({
            nome: req.body.nome,
            categoria: req.body.categoria,
            preco: req.body.preco,
            estoque: req.body.estoque
        });

        const jogoSalvo: IJogo = await novoJogo.save();
        return res.status(201).json({ message: "Jogo criado com sucesso!", jogo: jogoSalvo });
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao criar jogo', error });
    }
});

// PUT
app.put('/jogos/:id', async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const updates: Partial<IJogo> = req.body; // Partial<IJogo> permite atualizações parciais

        const jogoAtualizado = await Jogo.findByIdAndUpdate(id, updates, { new: true });

        if (!jogoAtualizado) {
            return res.status(404).json({ message: 'Jogo não encontrado' });
        }

        return res.status(200).json({ message: 'Jogo atualizado com sucesso!', jogo: jogoAtualizado });
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao atualizar jogo', error });
    }
});

// DELETE 
app.delete('/jogos/:id', async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const jogoDeletado = await Jogo.findByIdAndDelete(id);

        if (!jogoDeletado) {
            return res.status(404).json({ message: 'Jogo não encontrado' });
        }

        return res.status(200).json({ message: 'Jogo deletado com sucesso!' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar jogo', error });
    }
});