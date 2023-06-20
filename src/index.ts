import 'dotenv/config';
import { conectarBaseDeDatos } from './config/database';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import logger from 'morgan';
import indexRouter from './routes/index.routes'
const app = express();
const port = process.env.PORT || 8080;

// Llamar a la función de conexión
conectarBaseDeDatos();

// Resto del código de tu aplicación
// ...

// Configura los middlewares globales
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(indexRouter)
// Define las rutas y lógica adicional de la aplicación

// Middleware para manejar errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
