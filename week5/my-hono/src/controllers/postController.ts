import * as postModel from "../models/postModel"
import { type Context } from "hono"
export const getPosts = async (c: Context) => {
    const posts = await postModel.getAllPost();
    return c.json(posts);
  };
  
  export const addPost = async (c: Context) => {
    const body = await c.req.json();
    const newPost = await postModel.createPost(body);
    return c.json(newPost);
  };