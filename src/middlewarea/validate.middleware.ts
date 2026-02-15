import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

import { ApiErrors } from "../errors/api-errors";

export const validateBody = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw new ApiErrors(
        `Validation error: ${error.details.map((d) => d.message).join(", ")}`,
        400,
      );
    }
    next();
  };
};
