import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

// cria uma instância do Prisma para poder realizar consultas e alterações
const prisma = new PrismaClient();

// função para listar as tarefas do banco de dados
export const getTasks = async (req: Request, res: Response) => {
    const tasks = await prisma.task.findMany();
    console.log("Tarefas encontradas:", tasks); //debug
    res.json(tasks);
};

// função para criar a tabela
export const createTask = async (req: Request, res: Response) => {
    // pega os campos enviados no corpo da requisição
    const { title, description } = req.body;
    // cria uma nova tarefa no banco de dados
    const task = await prisma.task.create({
        data: { title, description },
    });
    // retorna a nova tarefa criada com o status HTTP 201 (criado)
    res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, done } = req.body;
    const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, description, done }, //campos a serem alterados
    });
    //retorna a tarefa atualizada
    res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send();
};