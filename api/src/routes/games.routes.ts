import { Router } from "express";
import { allVideoGames, allVideoGamesById } from "../services/VideoGames";
import { genresApi } from "../controllers/Generos";
import { createVideoGame } from "../services/CreateGame";
import { upDateGame } from "../services/UpDateGame";
import { deleteGame } from "../services/Delete";
import { platformsApi } from "../controllers/Plataformas";

export const routerGames = Router();

const VIDEOGAMES = '/videogames';
const GENRES = '/genres';
const PLATFORMS = '/platforms';

routerGames.post(VIDEOGAMES, createVideoGame);
routerGames.get(VIDEOGAMES, allVideoGames);
routerGames.get(`${VIDEOGAMES}/:id`, allVideoGamesById);
routerGames.put(`${VIDEOGAMES}/:id`, upDateGame);
routerGames.delete(`${VIDEOGAMES}/:id`, deleteGame);

routerGames.get(GENRES, genresApi);
//! SOLO SE USA PARA CONOCER LA CANTIDAD TOTAL DE PLATAFORMAS
routerGames.get(PLATFORMS, platformsApi);
