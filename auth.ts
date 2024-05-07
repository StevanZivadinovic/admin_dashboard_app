import { User } from "./src/api/models/Users";
import { connectToDatabase } from "./src/api/mongoDB";
import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const login = async (credentials: { username: any; password: any }) => {
  try {
    connectToDatabase();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "mika" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      authorize: async (credentials: { username: any; password: any }) => {
        console.log(credentials, "credentials");
        try {
          const res = await login(credentials);
          console.log(res, "USER");
          return res;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" }, //this is default behaviour by next.js
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //@ts-ignore
        token.username = user.username;
        //@ts-ignore
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        //@ts-ignore
        session.user.username = token.username;
        //@ts-ignore
        session.user.img = token.img;
      }
      return session;
    },
  },

  secret: process.env.AUTH_CREDENTIALS_SECRET,
});
