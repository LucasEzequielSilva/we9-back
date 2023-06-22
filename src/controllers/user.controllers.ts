import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken'
import bcryptjs from "bcryptjs"
import User from '../models/usuarios';
// Controlador para obtener todos los usuarios
const getUsers = async (req: Request, res: Response):Promise<void> => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    req.body.contraseña = bcryptjs.hashSync(req.body.contraseña, 10)
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

const signIn = async (req, res): Promise<void> => {
  const { email, contraseña } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    const contraseñaMatch = await bcryptjs.compare(contraseña, user.contraseña);
    if (!contraseñaMatch) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Actualizar la propiedad 'online' a 'true' en la base de datos para el usuario que inició sesión
    await User.update({ online: true }, { where: { id: user.id } });

    // Si el usuario y la contraseña son correctos, puedes firmar un token y enviarlo en la respuesta.
    const token = jsonwebtoken.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '48h' });

    user.contraseña = null; // para proteger la contraseña
    return res.status(200).json({
      success: true,
      message: '¡Usuario autenticado!',
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req.user as User).id;
    console.log(userId)
    // Actualizar la propiedad 'online' a 'false' en la base de datos para el usuario que cerró sesión
    await User.update({ online: false }, { where: { id: userId } });

    res.status(200).json({ success: true, message: 'Usuario cerró sesión exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
// Otros controladores y funciones relacionadas con usuarios
export default {
  logout,
  signIn,
  getUsers,
  createUser,
};
