import { Request, Response } from "express";
import query from "./db";
class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { mail, password } = req.body;
        const r: any = await query(
            "INSERT INTO users(mail,password) VALUES ($1,$2) RETURNING id",
            [mail, password]
        );
        return res.json(r);
    }
    public async list(_: Request, res: Response): Promise<Response> {
        const r: any = await query(
            "SELECT id,mail FROM users ORDER BY mail"
        );
        return res.json(r);
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body; // id do registro a ser excluído
        const r: any = await query(
            "DELETE FROM users WHERE id = $1", [id]
        );
        return res.json(r);
    }
    public async update(req: Request, res: Response): Promise<Response> {
        const { id, mail, password } = req.body;
        const r: any = await query(
            "UPDATE users SET mail=$2, password=$3 WHERE id=$1",
            [id, mail, password]
        );
        return res.json(r);
    }
}
export default new UserController();