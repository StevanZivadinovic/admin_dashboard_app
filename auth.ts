import { User } from "./src/api/models/Users";
import { connectToDatabase } from "./src/api/mongoDB";
import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {authConfig} from './authconfig'

const login = async (credentials: { username: any; password: any; }) => {
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
  ...authConfig,
  basePath: "/login",
  // session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "mika" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      authorize: async (credentials: { username: any; password: any; }) =>{
        console.log(credentials, 'credentials');
        try {
          const res = await login(credentials);
          console.log(res, 'USER');
        } catch (err) {
   
            // new CredentialsSignin(`Failed to login! Please check your credentials.`)
          
          console.error("Authorization error:", err);
          console.log(err);

        }
      },
      
    }),
  ],
  secret:process.env.AUTH_CREDENTIALS_SECRET
});


