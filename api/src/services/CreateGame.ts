import { Request, Response } from "express";
import { GamesGenres } from "../../../interface";
import db from "../models/db";

export const createVideoGame = async (req: Request, res: Response) => {
  const game = req.body as GamesGenres;
  try {
    const newGame = await db.VideoGame.create({
      name: game.name,
      description: game.description,
      released: game.released,
      image: game.image || "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
      rating: game.rating,
      platforms: game.platforms,
    });

    const genresDb = await db.genre.findAll({
      where: {
        name: game.genres,
      } 
    });

    await newGame.addGenre(genresDb);
    return res.json({ mgs: "Video Juegos creado" });
  } catch (error) {
    console.log("Error en POST por:", error);
  }
};
