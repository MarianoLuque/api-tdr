import express from "express";
import morgan from 'morgan';
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import categoriasRoutes from './routes/categorias.routes.js'

const app = express();

app.use(express.json())

app.use('/api', employeesRoutes)
app.use('/api', indexRoutes)
app.use('/api', categoriasRoutes)

app.listen(3000);
console.log('Server running on port 3000');
