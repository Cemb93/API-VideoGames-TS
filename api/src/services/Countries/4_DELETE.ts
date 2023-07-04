import { Request, Response } from 'express';
import db from '../../models/db';

export const deleteActivity = async (req: Request, res: Response) => {
  let { id } = req.params;

  try {
    let activity = await db.activitie.findByPk(id);
    if (!activity) {
      throw Error(`La Actividad: ${id}, no existe.`);
    } else {
      await activity.destroy();
      return res.status(200).json({ msg: `La Actividad: ${activity.name.toUpperCase()}, ha sido eliminada.` });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
  }
}