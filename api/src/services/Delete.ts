import { Request, Response } from 'express';
import { VideoGameModel } from '../models/videogame';

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const game = await VideoGameModel.findById(id);
    if (game?.id !== id || id.length < 24) {
      throw Error(`El juego no existe.`);
    } else {
      await VideoGameModel.findByIdAndDelete(id);
      return res.status(200).json({ msg: `El juego: ${game.name.toUpperCase()}, ha sido eliminado.`, game });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
  }
}
