import prisma from "../lib/prisma";

export const getAllUsers = () => {
    return prisma.user.findMany({
        include: {
          todos: true
        }
      });
}
export const createUser = (data: {
    name: string;
    email: string;
    password: string;
    todos?: { title: string }[];
  }) => {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        todos: {
          create: data.todos ?? []
        }
      },
      include: {
        todos: true // optional, to return the todos in the response
      }
    });
};
export const getUserTodos = async (userId: number) => {
    const user =  await prisma.user.findUnique({
      where: { id: userId },
      select: { todos: true },
    });
    return user
    
  };
export const editName = (data : {name : string , userId : number}) => {
    return prisma.user.update({
        where : {
            id : data.userId
        },
        data : {
            name : data.name
        }
    })
}