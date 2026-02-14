import { model, Schema } from "mongoose";

import { RoleEnum } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, selected: false },
    phone: { type: String, require: true },
    role: { type: String, enum: RoleEnum, default: RoleEnum.USER },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("users", userSchema);
