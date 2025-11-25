import { Request, Response } from "express";
import { Autor } from "../models";

class AutorController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { nome, cpf, data_nasc, email } = req.body;
        try {
            const document = new Autor({ nome, cpf, data_nasc, email });
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                return res.json({ message: "Este e-mail/cpf já está em uso!" });
            } else if (error && error.errors["mail"]) {
                return res.json({ message: error.errors["mail"].message });
            } else if (error && error.errors["nome"]) {
                return res.json({ message: error.errors["nome"].message });
            } else if (error && error.errors["cpf"]) {
                return res.json({ message: error.errors["cpf"].message });
            }else if (error && error.errors["data_nasc"]) {
                return res.json({ message: error.errors["data_nasc"].message });
            }
            return res.json({ message: error.message });
        }
    }

    public async list(_: Request, res: Response): Promise<Response> {
        try {
            const objects = await Autor.find().sort({ nome: "asc" });
            return res.json(objects);
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; 
        try {
            const object = await Autor.findByIdAndDelete(_id);
            if (object) {
                return res.json({ message: "Registro excluído com sucesso!" });
            } else {
                return res.json({ message: "Registro inexistente!" });
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, nome, cpf, data_nasc, email } = req.body;
        try {
            const document = await Autor.findById(id);
            if (!document) {
                return res.json({ message: "Autor inexistente!" });
            }
            document.nome = nome;
            document.cpf = cpf;
            document.data_nasc = data_nasc;
            document.email = email;

            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                return res.json({ message: "Este e-mail/cpf já está em uso!" });
            } else if (error && error.errors["mail"]) {
                return res.json({ message: error.errors["mail"].message });
            } else if (error && error.errors["nome"]) {
                return res.json({ message: error.errors["nome"].message });
            } else if (error && error.errors["cpf"]) {
                return res.json({ message: error.errors["cpf"].message });
            }else if (error && error.errors["data_nasc"]) {
                return res.json({ message: error.errors["data_nasc"].message });
            }
            return res.json({ message: error.message });
        }
    }
}

export default new AutorController();
