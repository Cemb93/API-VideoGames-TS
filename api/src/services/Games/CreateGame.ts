import { Request, Response } from "express";
import { GamesGenres } from "../../../../interface/Games";
import { genreModel } from "../../models/genre";
import { VideoGameModel } from "../../models/videogame";

export const createVideoGame = async (req: Request, res: Response) => {
  const game = req.body as GamesGenres;

  try {
    const newGame = await VideoGameModel.create({
      name: game.name,
      description: game.description,
      released: game.released,
      image: game.image || "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
      rating: game.rating,
      platforms: game.platforms,
      genres: game.genres
    });

    return res.json({ mgs: "Video Juegos creado", newGame });
  } catch (error) {
    console.log("Error en POST por:", error);
  }
};
