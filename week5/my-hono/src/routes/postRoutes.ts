import { Hono } from "hono";
import {getPosts , addPost} from "../controllers/postController"

const router = new Hono();

router.get("/" , getPosts)
router.post("/", addPost);

export default router