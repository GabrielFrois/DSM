import { Router, Request, Response } from "express";
import user from './user';
import spent from './spent';
const routes = Router();
routes.use("/usuario", user);
routes.use("/gasto", spent);
//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;