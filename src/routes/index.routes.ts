import express from 'express';
import userRoutes from './user.routes';

const router = express.Router();

router.use('/api', userRoutes);


export default router;
