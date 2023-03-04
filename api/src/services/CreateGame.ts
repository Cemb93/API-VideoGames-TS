import { Request, Response } from "express";
import { Genres } from "../models/Genres";
// import { Videogames } from "../models/VideoGames";
import Videogames from "../models/VideoGames";
import {sequelize} from '../db'
console.log('DB IN CREATE:', sequelize.models.Videogames)
//* METODOS DE TYPEORM => https://typeorm.biunav.com/en/repository-api.html#repository-api

export const createVideoGame = async (req: Request, res: Response) => {
  const { name, description, released, image, rating, platforms, genres } = req.body as Videogames;
  // console.log('GENERO:', genres)
  try {
    // const games = req.body as Videogames;
    if (platforms.length >= 1) {
      const newGame = await sequelize.models.Videogames.create({
        name: name,
        description: description,
        released: released,
        image: image,
        rating: rating,
        platforms: platforms,
      });
      console.log('NEW GAME:', newGame);
      return res.json({ mgs: 'Video Juegos creado' });
    }
  } catch (error) {
    console.log('Error en POST por:', error);
  }
};
