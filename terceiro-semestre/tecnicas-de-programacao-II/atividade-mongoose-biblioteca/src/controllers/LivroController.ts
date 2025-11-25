import { Request, Response } from "express";
import { Livro } from "../models";

class LivroController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { editora, titulo, paginas } = req.body;
        try {
            const document = new Livro({ editora, titulo, paginas });
            const response = await document.save();
            return res.json(response);
        } catch (error: any) {
            if (error && error.errors["titulo"]) {
                return res.json({ message: error.errors["titulo"].message });
            } else if (error && error.errors["paginas"]) {
                return res.json({ message: error.errors["paginas"].message });
            } else if (error && error.errors["editora"]) {
                return res.json({ message: error.errors["editora"].message });
            }
            return res.json({ message: error });
        }
    }

    public async list(req: Request, res: Response): Promise<Response> {
        try {
            const objects = await Livro.find().sort({ titulo: "asc" });
            return res.json(objects);
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body;
        try {
            const object = await Livro.findByIdAndDelete(_id);
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
        const { id, editora, titulo, paginas } = req.body;
        try {
            const document = await Livro.findById(id);
            if (!document) {
                return res.json({ message: "Livro inexistente!" });
            }
            document.editora = editora;
            document.titulo = titulo;
            document.paginas = paginas;
            const response = await document.save();
            return res.json(response);
        } catch (error: any) {
            if (error && error.errors["titulo"]) {
                return res.json({ message: error.errors["titulo"].message });
            } else if (error && error.errors["paginas"]) {
                return res.json({ message: error.errors["paginas"].message });
            } else if (error && error.errors["editora"]) {
                return res.json({ message: error.errors["editora"].message });
            }
            return res.json({ message: error });
        }
    }
}

export default new LivroController();