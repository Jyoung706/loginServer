import express from "express";
import logger from "morgan";
import route from "./routes/index";

export const createApp = () => {
  const app = express();
  app.use(express.json(), logger("tiny"), route);
  return app;
};
