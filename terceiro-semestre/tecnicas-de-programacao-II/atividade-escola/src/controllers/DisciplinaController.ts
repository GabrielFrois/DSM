import { Request, Response } from "express"; 
import { Disciplina } from "../models"; 
 
class DisciplinaController { 
 
    public async create(req: Request, res: Response): Promise<any> { 
        const { descricao } = req.body; 
        try { 
            const document = new Disciplina({ descricao }); 
            const resp = await document.save(); 
            return res.json(resp); 
        } catch (error: any) { 
            if (error && error.errors["descricao"]) { 
                return res.json({ message: error.errors["descricao"].message }); 
            } 
            return res.json({ message: error.message }); 
        } 
    } 
 
    public async list(_: Request, res: Response): Promise<any> { 
        try { 
            const objects = await Disciplina.find().sort({ mail: "asc" }); 
            return res.json(objects); 
        } catch (error: any) { 
            return res.json({ message: error.message }); 
        } 
    } 
 
    public async delete(req: Request, res: Response): Promise<any> {
          const { id: _id } = req.body;
        try { 
            const object = await Disciplina.findByIdAndDelete(_id); 
            if (object) { 
                return res.json({ message: "Disciplina excluída com sucesso" }); 
            } else { 
                return res.json({ message: "Disciplina inexistente" }); 
            } 
        } catch (error: any) { 
            return res.json({ message: error.message }); 
        } 
    } 
 
    public async update(req: Request, res: Response): Promise<any> { 
        const { id, descricao } = req.body; 
        try { 
            const document = await Disciplina.findById(id); 
            if (!document) { 
                return res.json({ message: "Disciplina inexistente" }); 
            } 
            document.descricao = descricao; 
            const resp = await document.save(); 
            return res.json(resp); 
        } catch (error: any) { 
            if (error && error.errors["descricao"]) { 
                return res.json({ message: error.errors["descricao"].message }); 
            } 
            return res.json({ message: error.message }); 
        } 
    } 
} 
 
export default new DisciplinaController();