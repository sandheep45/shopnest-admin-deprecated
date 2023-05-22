import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    values: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const VariantOptionMinAggregateInputObjectSchema = Schema;
