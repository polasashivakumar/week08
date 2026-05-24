import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },

    lastname: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
    },

    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      required: [true, "Gender is required"],
    },

    experience: {
      type: Number,
      min: 0,
      required: [true, "Experience is required"],
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export const UserModel = model("User", UserSchema);