import express from 'express';
import userRoutes from './user.routes';
import equiposRoutes from './equipos.routes'

const router = express.Router();

router.use('/api', userRoutes);
router.use('/api/equipos', equiposRoutes);


export default router;
