import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantAvgAggregateInputType> = z
  .object({
    price: z.literal(true).optional(),
    taxPercent: z.literal(true).optional(),
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    length: z.literal(true).optional(),
    weight: z.literal(true).optional(),
  })
  .strict();

export const VariantAvgAggregateInputObjectSchema = Schema;
