import { Request, Response } from "express";
import { Genres } from "../models/Genres";
import { Videogames } from "../models/VideoGames";
//* METODOS DE TYPEORM => https://typeorm.biunav.com/en/repository-api.html#repository-api

export const createVideoGame = async (req: Request, res: Response) => {
  const { name, description, released, image, rating, platforms, genres } = req.body;
  console.log('GENERO:', genres)
  try {
    const newGame = await Videogames.create({
      name,
      description,
      released,
      image: image || 'https://www.xtrafondos.com/wallpaper/3840x2160/6406-parado-en-el-borde-de-dos-mundos.html',
      rating,
      platforms,
    });
    console.log('NEW GAME:', newGame);

    let generos = await Genres.find({
      // name: genres
      select: 
        {name: genres}
      
    });
    // let generos = await Genres.find({
    //   where: {
    //     name: genres
    //   }
    // });
    console.log('NEW GENERO:', generos)

    // await newGame.save(generos)
    await newGame.save(genres)
    return res.json({ mgs: 'Video Juegos creado' });
  } catch (error) {
    console.log('Error en POST por:', error);
  }
};
