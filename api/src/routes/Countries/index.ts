import { Router } from "express"; //* ESModules
// const { Router } require("express"); //? commonjs

import { Countries, countriesById } from "../../services/Countries/2_READ";
import { getAllActivities, postActivities } from "../../services/Countries/1_POST";
import { deleteActivity } from "../../services/Countries/4_DELETE";
import { upDateActivity } from "../../services/Countries/3_UPDATE";

const routerCounty = Router();

const COUNTRIES = '/countries';
const COUNTRIES_ID = '/countries/:id';
const ACTIVITIES = '/activities';
const ACTIVITIES_ID = '/activities/:id';

routerCounty.get(COUNTRIES, Countries);
routerCounty.get(COUNTRIES_ID, countriesById);

//! ---------- CRUD BACK-END ----------
routerCounty.post(ACTIVITIES, postActivities);
routerCounty.get(ACTIVITIES, getAllActivities);
routerCounty.delete(ACTIVITIES_ID, deleteActivity);
routerCounty.put(ACTIVITIES_ID, upDateActivity);

export default routerCounty;