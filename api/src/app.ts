import express, { Application, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routerGames from "./routes/Games";
import { dbConexion } from "./db";
import passport from 'passport'
import session from 'express-session';
import cors from "cors";

export const server: Application = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan("dev"));
dbConexion()
server.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
server.use("/", routerGames);

server.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log('APP typeof REQ:',typeof err)
  console.log('APP REQ:', err)
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// server.use(passport.initialize())
// server.use(passport.session())
// server.use(session({
//   secret: typeof process.env.SECRET_SESSION,
//   resave: false,
//   saveUninitialized: false
// }));
