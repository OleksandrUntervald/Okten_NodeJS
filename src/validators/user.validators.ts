import Joi from "joi";

import { RoleEnum } from "../enums/role.enum";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().optional(),
  role: Joi.string().valid(RoleEnum.USER, RoleEnum.ADMIN).optional(),
  isVerified: Joi.boolean().optional(),
  isDeleted: Joi.boolean().optional(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  age: Joi.number().min(1).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  phone: Joi.string().optional(),
  role: Joi.string().valid(RoleEnum.USER, RoleEnum.ADMIN).optional(),
  isVerified: Joi.boolean().optional(),
  isDeleted: Joi.boolean().optional(),
});
