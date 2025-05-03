import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetTodo = async (c: Context) => {
  try {
    const todos = await todoModel.GetTodo();
    return c.json(todos);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const name = await c.req.json();
    const create = await todoModel.AddTodo(name)
    return c.json(create)
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const {id , name} = await c.req.json();
    const updatedTodo = await todoModel.EditTodo(id,name);
    return c.json(updatedTodo)

  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const {id} = await c.req.json();
    const CompletedTodo = await todoModel.SuccessTodo(id);
    return c.json(CompletedTodo)

  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const id = await Number(c.req.param("id"));
    const deletedTodo = await todoModel.DeleteTodo(id);
    return c.json(deletedTodo)
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
