import { Router, Request, Response } from "express"; 
import professor from './professores'; 
import disciplina from './disciplinas'; 
import professor_has_disciplina from './professor_has_disciplinas'; 

const routes = Router(); 

routes.use("/professor", professor); 
routes.use("/disciplina", disciplina); 
routes.use("/professor_has_disciplina", professor_has_disciplina); 
routes.use((_: any, res: any) => res.json({ error: "Requisição desconhecida" })); 

export default routes; 