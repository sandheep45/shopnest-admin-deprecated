import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    price: z.literal(true).optional(),
    sku: z.literal(true).optional(),
    taxPercent: z.literal(true).optional(),
    barcode: z.literal(true).optional(),
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    length: z.literal(true).optional(),
    weight: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const VariantMaxAggregateInputObjectSchema = Schema;
