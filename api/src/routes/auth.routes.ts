import { Router } from "express"
import passport from "passport";

export const authGoogle = Router()

authGoogle.get("/login/success", (req: any, res: any) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "successfull",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "No authorized",
    });
  }
});

authGoogle.get("/login/failed", (req: any, res: any) => {
  res.status(401).json({
    error: true,
    message: "Login in failure",
  })
});

authGoogle.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: "/login/failed"
}));

authGoogle.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

authGoogle.get("/logout", (req:any, res:any) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});