import { Hono } from "hono";
import { getTodos , createTodo ,editTodo} from "../controllers/todoController";

const router = new Hono();

router.get("/",getTodos)
router.post("/",createTodo)
router.patch("/",editTodo)
export default router