import Equipos from '../models/equipos'
import { Request, Response } from 'express';

const createEquipo = async(req:Request, res:Response) => {
    try {
        let equipo = await Equipos.create(req.body);
        res.status(201).json({
            equipo,
            success: true,
            message: "Equipo creado satisfactoriamente!"
        });
    } catch (error) {
        console.log(error)        
    }
}
export default {createEquipo}