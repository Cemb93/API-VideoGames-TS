import { Router } from "express";
import { routerGames } from "./games.routes";
import { authGoogle } from "./auth.routes";

export const allRoutes = Router();

allRoutes.use(routerGames)

allRoutes.use(authGoogle)