import { Request, Response } from 'express';
import User from '../models/usuarios';

// Controlador para obtener todos los usuarios
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Otros controladores y funciones relacionadas con usuarios

export default {
  getUsers,
  createUser,
};
