import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    email: { type: String, required: true, unique: true },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    password: {
      type: String,
      required: true,
      unique: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          throw new Error("Password must be at least 5 characters");
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model("User", UserSchema);
