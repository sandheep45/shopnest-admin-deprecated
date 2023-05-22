import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewAvgAggregateInputType> = z
  .object({
    rating: z.literal(true).optional(),
  })
  .strict();

export const CustomerReviewAvgAggregateInputObjectSchema = Schema;
