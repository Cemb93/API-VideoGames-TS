import { Request, Response } from 'express';
import db from '../../models/db';

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const game = await db.VideoGame.findByPk(id);
    if (!game) {
      throw Error(`El juego: ${id}, no existe.`);
    } else {
      await game.destroy();
      return res.status(200).json({ msg: `El juego: ${game.name.toUpperCase()}, ha sido eliminado.` });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
  }
}
