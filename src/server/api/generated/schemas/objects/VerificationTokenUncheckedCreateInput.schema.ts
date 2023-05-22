import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    identifier: z.string(),
    token: z.string(),
    expires: z.coerce.date(),
  })
  .strict();

export const VerificationTokenUncheckedCreateInputObjectSchema = Schema;
