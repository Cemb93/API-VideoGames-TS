import { Request, Response } from "express";
import { GamesGenres } from "../../../interface";
import db from "../models/db";

export const upDateGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const game: GamesGenres = req.body;
  try {
    const current = await db.VideoGame.findByPk(id);
    if (!current) {
      throw Error('El juego no existe.');
    } else {
      await db.VideoGame.update(game, { where: { id } } );
      return res.json({ msg: `El juego ha sido actualizado.` } );
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.json({ error: error.message, });
    }
  }
}