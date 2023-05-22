import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MediaMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const MediaMinAggregateInputObjectSchema = Schema;