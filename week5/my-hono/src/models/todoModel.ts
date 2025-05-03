import prisma from "../lib/prisma";

export const getAllTodos = () => {
    return prisma.todo.findMany();
}
export const createTodo = (data : {title : string ; userId : number;}) => prisma.todo.create({
    data : {
        title : data.title,
        user: {
            connect :  {id : data.userId}
        }
    }
})

export const editTodo = (data : {title : string ; todoId : number}) => prisma.todo.update({
    where: {
        id : data.todoId,
    },
    data: {
        title : data.title
    },
})