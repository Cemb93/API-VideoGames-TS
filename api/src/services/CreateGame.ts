import { Request, Response } from "express";
import { GamesGenres } from "../interface";
import db from "../models/db";

export const createVideoGame = async (req: Request, res: Response) => {
  const game = req.body as GamesGenres;
  try {
    let newGame = await db.VideoGame.create({
      name: game.name,
      description: game.description,
      released: game.released,
      image: game.image || "https://www.xtrafondos.com/wallpaper/3840x2160/6406-parado-en-el-borde-de-dos-mundos.html",
      rating: game.rating,
      platformsDb: game.platformsDb,
    });

    let generos_DB = await db.genre.findAll({
      where: {
        name: game.genres,
      } 
    });

    await newGame.addGenre(generos_DB);
    return res.json({ mgs: "Video Juegos creado" });
  } catch (error) {
    console.log("Error en POST por:", error);
  }
};
