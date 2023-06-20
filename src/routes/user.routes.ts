import express from 'express';
import UserController from '../controllers/user.controllers';
import passport from '../middlewares/passport'

const router = express.Router();
// Ruta para obtener todos los usuarios
router.get('/users', UserController.getUsers);

// Ruta para crear un nuevo usuario
router.post('/signup', UserController.createUser);

// Ruta para iniciar sesión
router.post('/signin', UserController.signIn);

// Ruta para cerrar sesión
router.post('/logout', passport.authenticate('jwt', { session: false }), UserController.logout);

// Otros enrutamientos relacionados con usuarios
export default router;
