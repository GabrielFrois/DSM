import express from "express";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "../controller/taskController";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
export const taskRoutes = router;