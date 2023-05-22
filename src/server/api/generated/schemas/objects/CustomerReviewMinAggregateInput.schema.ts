import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    rating: z.literal(true).optional(),
    comment: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const CustomerReviewMinAggregateInputObjectSchema = Schema;
