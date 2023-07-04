import { Router } from "express";
import { allVideoGames, allVideoGamesById } from "../../services/Games/VideoGames";
import { genresApi } from "../../controllers/Games/Generos";
import { createVideoGame } from "../../services/Games/CreateGame";
import { upDateGame } from "../../services/Games/UpDateGame";
import { deleteGame } from "../../services/Games/Delete";
import { platformsApi } from "../../controllers/Games/Plataformas";

const routerGames = Router();

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

export default routerGames;