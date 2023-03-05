import { Request, Response } from "express";
import { IVideoGames } from "../interface";
import db from "../models/db";

export const createVideoGame = async (req: Request, res: Response) => {
  const game = req.body as IVideoGames;
  // const game = req.body as IGamesGenres;
  // const { name, description, released, image, rating, platforms, genres } = req.body;
  try {
    // let newGame = await db.VideoGame.create({
    //   name,
    //   description,
    //   released,
    //   image,
    //   rating,
    //   platforms,
    // });
    let newGame = await db.VideoGame.create({
      name: game.name,
      description: game.description,
      released: game.released,
      image: game.background_image,
      rating: game.rating,
      platforms: game.platforms,
    });
    // console.log(newGame.__proto__)
    // newGame = JSON.parse(JSON.stringify(newGame));
    let generos_DB = await db.Genre.findAll({ where: { name: game.genres } });
    console.log('GENEROS DB:', generos_DB)
    await newGame.addGenre(generos_DB);
    return res.json({ mgs: "Video Juegos creado" });
  } catch (error) {
    console.log("Error en POST por:", error);
  }
};
