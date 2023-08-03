import { Request, Response } from "express";
import { GamesDb } from "../../../../interface/Games";
import { VideoGameModel } from "../../models/videogame";

export const upDateGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const game: GamesDb = req.body;
  
  try {
    const current = await VideoGameModel.findById(id);
    if (current?.id !== id) {
      throw Error('El juego no existe.');
    } else {
      await VideoGameModel.findByIdAndUpdate(id, game );
      return res.json({ msg: `El juego ha sido actualizado.`, game } );
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.json({ error: error.message, });
    }
  }
}