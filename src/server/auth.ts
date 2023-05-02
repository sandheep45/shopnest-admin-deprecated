import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { env } from "react-aria /env.mjs";
import { prisma } from "react-aria /server/db";
import { type Role } from "@prisma/client";

function generateUsername(name: string, id: string, email: string) {
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
  const uniqueString = name.replace(" ", "-") + id + email + randomString; // Concatenate the parameters and random string
  return uniqueString;
}

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    role: Role;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  events: {
    async createUser({ user }) {
      const username = generateUsername(
        user.name as string,
        user.id,
        user.email as string
      );
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          username,
        },
      });
    },
  },
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      const userFromDb = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (!userFromDb) {
        return "/signin?error=User not found";
      }

      if (userFromDb?.role !== "ADMIN") {
        return "/signin?error=Not an admin";
      }

      return true;
    },
    redirect({ url, baseUrl }) {
      console.log(89, url, baseUrl);
      return baseUrl;
    },
    jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.sub;
      }
      return token;
    },
    session: ({ session, user }) => {
      return {
        ...session,
        id: user.id,
        user: {
          ...session.user,
        },
      };
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: env.FACEBOOK_CLIENT_ID,
      clientSecret: env.FACEBOOK_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
