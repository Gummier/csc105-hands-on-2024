import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./router/index.routes.ts";
import { logger } from "hono/logger";
import cors from "cors"
const app = new Hono();
export const db = new PrismaClient();

app.use(logger());
app.use('*', async (c, next) => {
  // Set CORS headers manually for the response
  c.res.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173')
  c.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  c.res.headers.set('Access-Control-Allow-Headers', 'Content-Type')

  // If the request method is OPTIONS, respond with 200 (preflight request)
  if (c.req.method === 'OPTIONS') {
    return c.json({}, 200)
  }

  return next()
})

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("", mainRouter);

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
