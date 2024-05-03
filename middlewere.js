import NextAuth from "next-auth";
import { authConfig } from "./auth/route";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
