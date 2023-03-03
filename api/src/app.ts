import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//* Importando las rutas
// import routes from './routes/Users';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

// app.use(routes);

export default app;