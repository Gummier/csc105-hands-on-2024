import { Hono } from "hono";
import { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo } from '../controller/todo.controller.ts';
const todoRouter = new Hono();

todoRouter.get("/test", (c) => c.text("Hello From Todo Router"));
todoRouter.get("/" , GetTodo)
todoRouter.post("/",AddTodo)
todoRouter.patch("/",EditTodoName)
todoRouter.patch("/complete",CompleteTodo)
todoRouter.delete("/:id",DeleteTodo)
export { todoRouter };
