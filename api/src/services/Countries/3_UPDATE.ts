import { Request, Response } from 'express';
import db from '../../models/db';

export const upDateActivity = async (req: Request, res: Response) => {
  const { id } = req.params;
  let activity = req.body;
  try {
    let current = await db.activitie.findByPk(id);
    if (!current) {
      throw Error('La Actividad no existe.');
    } else {
      await db.activitie.update(activity, { where: { id } } );
      return res.json({ msg: `La actividad ha sido actualizada.` } );
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.json({ error: error.message, });
    }
  }
}