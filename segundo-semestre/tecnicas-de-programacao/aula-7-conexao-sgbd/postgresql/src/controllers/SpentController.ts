import { Request, Response } from "express";
import query from "./db";
class SpentController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { iduser, description, value } = req.body;
        const r: any = await query(
            "INSERT INTO spents(iduser, description, value) VALUES ($1,$2,$3) RETURNING id",
            [iduser, description, value]
        );
        return res.json(r);
    }
    public async list(req: Request, res: Response): Promise<Response> {
        const { iduser } = req.body;
        const r: any = await query(
            "SELECT id,description,value FROM spents WHERE iduser=$1 ORDER BY id DESC",
            [iduser]
        );
        return res.json(r);
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body; // id do registro a ser excluído
        const r: any = await query(
            "DELETE FROM spents WHERE id = $1", [id]
        );
        return res.json(r);
    }
    public async update(req: Request, res: Response): Promise<Response> {
        const { id, description, value } = req.body;
        const r: any = await query(
            "UPDATE spents SET description=$2, value=$3 WHERE id=$1",
            [id, description, value]
        );
        return res.json(r);
    }
}
export default new SpentController();