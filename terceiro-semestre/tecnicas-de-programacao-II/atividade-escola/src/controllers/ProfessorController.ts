import { Request, Response } from "express"; 
import { Professor } from "../models"; 
 
class ProfessorController { 
 
    public async create(req: Request, res: Response): Promise<any> { 
        const { nome, email, cpf } = req.body; 
        try { 
            const document = new Professor({ nome, email, cpf }); 
            const resp = await document.save(); 
            return res.json(resp); 
        } catch (error: any) { 
            if (error.code === 11000 || error.code === 11001) { 
                return res.json({ message: "CPF ou e-Mail já em uso" }); 
            } else if (error && error.errors["nome"]) { 
                return res.json({ message: error.errors["nome"].message }); 
            } else if (error && error.errors["email"]) { 
                return res.json({ message: error.errors["email"].message }); 
            } else if (error && error.errors["cpf"]) { 
                return res.json({ message: error.errors["cpf"].message }); 
            } 
            return res.json({ message: error.message }); 
        } 
    } 
 
    public async list(_: Request, res: Response): Promise<any> { 
        try { 
            const objects = await Professor.find().sort({ mail: "asc" }); 
            return res.json(objects); 
        } catch (error: any) { 
            return res.json({ message: error.message }); 
        } 
    } 
 
    public async delete(req: Request, res: Response): Promise<any> { 
        const { id: _id } = req.body;
        try { 
            const object = await Professor.findByIdAndDelete(_id); 
            if (object) { 
                return res.json({ message: "Professor excluído com sucesso" }); 
            } else { 
                return res.json({ message: "Professor inexistente" }); 
            } 
        } catch (error: any) { 
            return res.json({ message: error.message }); 
        } 
    } 
 
    public async update(req: Request, res: Response): Promise<any> { 
        const { id, nome, email, cpf } = req.body; 
        try { 
            const document = await Professor.findById(id); 
            if (!document) { 
                return res.json({ message: "Professor inexistente" }); 
            } 
            document.nome = nome; 
            document.email = email; 
            document.cpf = cpf; 
            const resp = await document.save(); 
            return res.json(resp); 
        } catch (error: any) { 
            if (error.code === 11000 || error.code === 11001) { 
                return res.json({ message: "CPF ou e-Mail já em uso" }); 
            } else if (error && error.errors["nome"]) { 
                return res.json({ message: error.errors["nome"].message }); 
            } else if (error && error.errors["email"]) { 
                return res.json({ message: error.errors["email"].message }); 
            } else if (error && error.errors["cpf"]) { 
                return res.json({ message: error.errors["cpf"].message }); 
            } 
            return res.json({ message: error.message }); 
        } 
    } 
} 
 
export default new ProfessorController();