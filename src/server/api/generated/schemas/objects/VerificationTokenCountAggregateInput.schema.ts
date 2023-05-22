import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VerificationTokenCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    identifier: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expires: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const VerificationTokenCountAggregateInputObjectSchema = Schema;
