import express, { NextFunction, Request, Response } from "express";

import { ApiErrors } from "./errors/api-errors";
import { userRouter } from "./routers/user.routes";
// import { read, write } from "./services/fs.services";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

// app.put(
//   "/users/:usersId",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userId = Number(req.params.usersId);
//       const { name, email, password } = req.body;
//
//       const users = await read();
//       const userIndex = users.findIndex((user) => user.id === userId);
//
//       if (userIndex === -1) {
//         throw new ApiErrors("User not found", 400);
//       }
//
//       // Валідація
//       if (!name || name.length < 3) {
//         throw new ApiErrors("Name must be at least 3 characters long", 404);
//       }
//       if (!email || !email.includes("@")) {
//         throw new ApiErrors("Email is required and should be valid", 404);
//       }
//       if (!password || password.length < 6) {
//         throw new ApiErrors("Password should be at least 6 characters", 404);
//       }
//
//       users[userIndex] = {
//         ...users[userIndex],
//         name,
//         email,
//         password,
//       };
//
//       await write(users);
//       res.status(200).send(users[userIndex]);
//     } catch (e) {
//       next(e);
//     }
//   },
// );
//
// app.delete(
//   "/users/:usersId",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const userId = Number(req.params.usersId);
//
//       const users = await read();
//       const userIndex = users.findIndex((user) => user.id === userId);
//
//       if (userIndex === -1) {
//         throw new ApiErrors("User not found", 404);
//       }
//
//       users.splice(userIndex, 1);
//       await write(users);
//
//       res.sendStatus(204);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

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
