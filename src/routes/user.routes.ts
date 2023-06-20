import express from 'express';
import UserController from '../controllers/user.controllers';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/users', UserController.getUsers);

// Ruta para crear un nuevo usuario
router.post('/signup', UserController.createUser);

// Otros enrutamientos relacionados con usuarios

export default router;
