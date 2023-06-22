import Equipos from '../models/equipos';
import { EquipoAttributes } from '../types/EquipoTypes';
import { Request, Response } from 'express';

interface CreateEquipoRequest extends Request {
  body: EquipoAttributes;
}
const readAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, formation, country, league, id_tecnico, team_name } = req.query;

    const whereClause = {};
    if (category) {
      whereClause['category'] = category;
    }
    if (formation) {
      whereClause['formation'] = formation;
    }
    if (country) {
      whereClause['country'] = country;
    }
    if (league) {
      whereClause['league'] = league;
    }
    if (team_name) {
      whereClause['team_name'] = team_name;
    }

    if (id_tecnico) {
      whereClause['id_tecnico'] = id_tecnico;
    }

    const equipos = await Equipos.findAll({
      where: whereClause
    });

    res.status(200).json(equipos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos' });
  }
};
const createEquipo = async (req: CreateEquipoRequest, res: Response) => {
  try {
    let equipo = await Equipos.create(req.body);
    res.status(201).json({
      equipo,
      success: true,
      message: "Equipo creado satisfactoriamente!"
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteEquipo = async (req: Request, res: Response) => {
    const equipoId = req.params.id;
  
    try {
      // Buscar el equipo por su id
      const equipo = await Equipos.findByPk(equipoId);
      if (equipo) {
        // Si se encuentra el equipo, eliminarlo
        await equipo.destroy();
  
        res.json({
          equipo,
          success: true,
          message: "Equipo eliminado satisfactoriamente!"
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Equipo no encontrado."
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error al eliminar el equipo."
      });
    }
  };
export default { createEquipo, deleteEquipo, readAll };
