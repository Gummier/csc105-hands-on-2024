import { Hono } from "hono";
import { getUsers,createUser , userTodo,editUsername} from "../controllers/userController";


const router = new Hono();
router.get("/" , getUsers);
router.post("/",createUser);
router.get("/:id",userTodo)
router.patch("/",editUsername)
export default router;