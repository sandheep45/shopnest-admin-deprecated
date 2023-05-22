import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    keywords: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    variantId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MetaDataCountAggregateInputObjectSchema = Schema;
