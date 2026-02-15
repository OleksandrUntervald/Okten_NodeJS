import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewarea/common.middleware";
import { validateBody } from "../middlewarea/validate.middleware";
import {
  createUserSchema,
  updateUserSchema,
} from "../validators/user.validators";

const router = Router();

router.get("/", userController.getList);
router.post("/", validateBody(createUserSchema), userController.create);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getById,
);
router.put(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  validateBody(updateUserSchema),
  userController.update,
);
router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.delete,
);

export const userRouter = router;
