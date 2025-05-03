import prisma from "../lib/prisma";

export const getAllPost = () => prisma.post.findMany();

export const createPost = (data : {title : string; content : string;}) => prisma.post.create({data});