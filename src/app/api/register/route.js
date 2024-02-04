import { User } from "../../models/user";
import mongoose from "mongoose";

export async function POST(req, res, next) {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const body = await req.json();

  const createUser = await User.create(body);

  return Response.json(createUser);
}
