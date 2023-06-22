import express from 'express';
import equiposControllers from '../controllers/equipos.controllers';
import passport from '../middlewares/passport'

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/create', equiposControllers.createEquipo);
router.delete('/delete/:id', equiposControllers.deleteEquipo);
router.get('/readAll', equiposControllers.readAll)
// Otros enrutamientos relacionados con usuarios
export default router;
