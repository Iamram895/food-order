import { User } from "@/app/models/user";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongoConnect";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "example@.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const email = credentials?.email;
          const password = credentials?.password;
          console.log(email, password);

          await mongoose.connect(process.env.MONGO_URL);

          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User not found");
          }

          const passwordOk = await bcrypt.compareSync(password, user.password);

          if (passwordOk) {
            return Promise.resolve(user);
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error) {
          console.error("Authentication error:", error.message);
          return Promise.resolve(null);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
