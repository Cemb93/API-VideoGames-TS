import express, { Application, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import routerGames from "./routes/Games";
import routerCounty from "./routes/Countries";
import { dbConexion } from "./db_demo";

require("./models/db");

const server: Application = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan("dev"));
server.use((_req: Request, res: Response, next: NextFunction) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
dbConexion()
server.use("/", routerGames);
// server.use("/", routerCounty);

server.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log('APP typeof REQ:',typeof err)
  console.log('APP REQ:', err)
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
