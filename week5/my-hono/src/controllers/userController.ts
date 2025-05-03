import * as userModel from "../models/userModel"

import {type Context} from "hono";

export const getUsers = async (c : Context) => {
    const users = await userModel.getAllUsers();
    return c.json(users);
}
export const createUser = async (c : Context) => {
    const body = await c.req.json();

    const user = await userModel.createUser(body);
    return c.json(user);
}
export const userTodo = async (c: Context) => {
    const id = Number(c.req.param("id"));
    const todo = await userModel.getUserTodos(id);
    return c.json(todo)
}
export const editUsername = async (c:Context) => {
    const body = await c.req.json();
    
    const user = await userModel.editName(body)
    return c.json(user)
}