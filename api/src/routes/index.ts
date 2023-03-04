import { Router } from "express";
import { allVideoGames, allVideoGamesById } from "../services/VideoGames";
import { genresApi } from "../controllers/Generos";
import { createVideoGame } from "../services/CreateGame";

const router = Router();

const VIDEOGAMES = '/videogames';
const GENRES = '/genres';

router.post(VIDEOGAMES, createVideoGame);
router.get(VIDEOGAMES, allVideoGames);
router.get(`${VIDEOGAMES}/:id`, allVideoGamesById);
// router.put('/users/:id', update);
// router.delete('/users/:id', eliminar);

router.get(GENRES, genresApi);

export default router;