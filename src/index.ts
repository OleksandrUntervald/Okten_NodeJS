import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./config/configs";
import { ApiErrors } from "./errors/api-errors";
import { userRouter } from "./routers/user.routes";
// import { read, write } from "./services/fs.services";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/users", userRouter);

app.use(
  "*",
  (error: ApiErrors, eq: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).send({
      message: error.messege,
    });
  },
);

process.on("uncaughtException", (error) => {
  console.error("uncaughtException", error.message, error.stack);
  process.exit(1);
});

app.listen(configs.APP_PORT, async () => {
  await mongoose.connect(configs.MONGO_URI);
  console.log(
    `Server is good on http://${configs.APP_HOST}:${configs.APP_PORT}`,
  );
});
