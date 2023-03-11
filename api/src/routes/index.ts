import { Router } from "express";
import { allVideoGames, allVideoGamesById } from "../services/VideoGames";
import { genresApi } from "../controllers/Generos";
import { createVideoGame } from "../services/CreateGame";
import { upDateGame } from "../services/UpDateGame";
import { deleteGame } from "../services/Delete";

const router = Router();

const VIDEOGAMES = '/videogames';
const GENRES = '/genres';

router.post(VIDEOGAMES, createVideoGame);
router.get(VIDEOGAMES, allVideoGames);
router.get(`${VIDEOGAMES}/:id`, allVideoGamesById);
router.put(`${VIDEOGAMES}/:id`, upDateGame);
router.delete(`${VIDEOGAMES}/:id`, deleteGame);

router.get(GENRES, genresApi);

export default router;