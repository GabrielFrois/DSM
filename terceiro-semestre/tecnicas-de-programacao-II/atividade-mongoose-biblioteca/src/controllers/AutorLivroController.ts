import { Request, Response } from "express";
import { AutorLivro } from "../models";

class AutorLivroController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { livro, autor } = req.body;
        try {
            const document = new AutorLivro({ livro, autor });
            const response = await document.save();
            return res.json(response);
        } catch (error: any) {
            if (error && error.errors["autor"]) {
                return res.json({ message: error.errors["autor"].message });
            } else if (error && error.errors["livro"]) {
                return res.json({ message: error.errors["livro"].message });
            }
            return res.json({ message: error });
        }
    }

    public async list(_: Request, res: Response): Promise<Response> {
        try {
            const objects = await AutorLivro.find()
                .populate("livro")
                .populate("autor")
                .select("autor")
                .sort({ nome: "asc" });
            return res.json(objects);
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body;
        try {
            const object = await AutorLivro.findByIdAndDelete(_id);
            if (object) {
                return res.json({ message: "Registro excluído com sucesso" });
            } else {
                return res.json({ message: "Registro inexistente" });
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, livro, autor } = req.body;
        try {
            const document = await AutorLivro.findById(id);
            if (!document) {
                return res.json({ message: "Registro inexistente!" });
            }
            document.livro = livro;
            document.autor = autor;
            const response = await document.save();
            return res.json(response);
        } catch (error: any) {
            if (error && error.errors["livro"]) {
                return res.json({ message: error.errors["livro"].message });
            } else if (error && error.errors["autor"]) {
                return res.json({ message: error.errors["autor"].message });
            }
            return res.json({ message: error });
        }
    }
}

export default new AutorLivroController();