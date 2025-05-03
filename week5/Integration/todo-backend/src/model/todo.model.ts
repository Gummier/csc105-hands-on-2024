import { db } from "../index.ts";

const GetTodo = async () => {
  //TODO
  const todos = await db.todo.findMany();
  return todos
};

const AddTodo = async ( data : {name: string}) => {
  //TODO
  const todo = await db.todo.create({
  data: {
    name: data.name,
    success: false,
  },
});

return todo;
};

const EditTodo = async (todoId: number, editTodoName: string) => {
  //TODO
  const updatedTodo = await db.todo.update({
    where:{
      id : todoId,
    },
    data : {
      name : editTodoName
    }
  })
  return updatedTodo
};

const SuccessTodo = async (todoId: number) => {
  //TODO
  const updatedTodo = await db.todo.update({
    where:{
      id : todoId,
    },
    data : {
      success : true,
    }
  })
  return updatedTodo
};

const DeleteTodo = async (todoId: number) => {
  //TODO
  const deletedTodo = await db.todo.delete({
    where : {
      id : todoId,
    },
  })
  return deletedTodo
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
