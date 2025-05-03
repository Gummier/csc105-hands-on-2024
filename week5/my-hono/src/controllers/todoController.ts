import * as todoModel from "../models/todoModel"

import { type Context } from "hono"

export const getTodos = async (c: Context) => {
    const todos = await todoModel.getAllTodos();
    return c.json(todos as any);
}
export const createTodo = async (c: Context) => {
    const body = await c.req.json();
    const todos = await todoModel.createTodo(body);
    return c.json(todos)
}
export const editTodo = async (c:Context) => {
    try{
        const body = await c.req.json();
        const updatedTodo = await todoModel.editTodo(body);
        return c.json(updatedTodo);
    }
    catch(err){
        return c.json({message : err})
    }
}