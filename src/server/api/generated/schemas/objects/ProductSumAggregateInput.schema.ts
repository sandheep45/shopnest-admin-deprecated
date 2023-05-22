import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductSumAggregateInputType> = z
  .object({
    taxPercent: z.literal(true).optional(),
  })
  .strict();

export const ProductSumAggregateInputObjectSchema = Schema;
