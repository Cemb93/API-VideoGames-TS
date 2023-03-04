import { Router } from "express";
import { allVideoGames, allVideoGamesById } from "../services/VideoGames";

const router = Router();

const VIDEOGAMES = '/videogames';
const GENRES = '/genres';

// router.post('/users', create);

router.get(VIDEOGAMES, allVideoGames);
router.get(`${VIDEOGAMES}/:id`, allVideoGamesById);

// router.put('/users/:id', update);

// router.delete('/users/:id', eliminar);

export default router;