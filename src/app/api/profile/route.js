import { getServerSession } from "next-auth";
import { User } from "../../models/user";
import mongoose from "mongoose";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req, res, next) {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const data = await req.json();

  const session = await getServerSession(authOptions);
  const email = session.user.email;

  await User.updateOne({ email }, data);

  return Response.json(true);
}

export async function GET() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const session = await getServerSession(authOptions);
  const email = session.user.email;

  return Response.json(await User.findOne({ email }));
}
