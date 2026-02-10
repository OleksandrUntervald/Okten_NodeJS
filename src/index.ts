import express, { NextFunction, Request, Response } from "express";

import { ApiErrors } from "./errors/api-errors";
import { userRouter } from "./routers/user.routes";
// import { read, write } from "./services/fs.services";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use(
  "*",
  (error: ApiErrors, eq: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      message: error.messege,
    });
  },
);

process.on("uncaughtException", (error) => {
  console.error("uncaughtException", error.message, error.stack);
});

app.listen(3000, () => {
  console.log("Server is good");
});
