import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    rating: z.number(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    productId: z.string(),
  })
  .strict();

export const CustomerReviewUncheckedCreateInputObjectSchema = Schema;
