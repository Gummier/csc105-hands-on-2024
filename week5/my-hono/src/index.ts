import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes'
import todoRoutes from './routes/todoRoutes';

const app = new Hono()
app.route('/posts' , postRoutes)
app.route('/users' , userRoutes);
app.route('/todos',todoRoutes);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
