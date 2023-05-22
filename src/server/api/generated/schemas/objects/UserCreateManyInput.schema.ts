import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    image: z.string().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
