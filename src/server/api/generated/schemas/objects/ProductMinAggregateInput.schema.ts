import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    tags: z.literal(true).optional(),
    taxPercent: z.literal(true).optional(),
    status: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
