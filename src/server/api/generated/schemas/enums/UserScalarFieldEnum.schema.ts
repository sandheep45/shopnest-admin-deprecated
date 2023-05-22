import { z } from "zod";

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "username",
  "emailVerified",
  "role",
  "image",
]);
