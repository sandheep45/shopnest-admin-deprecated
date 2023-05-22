import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    values: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const VariantOptionMaxAggregateInputObjectSchema = Schema;
