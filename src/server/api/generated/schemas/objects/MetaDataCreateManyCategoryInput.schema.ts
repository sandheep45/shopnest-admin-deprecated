import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateManyCategoryInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    productId: z.string().optional().nullable(),
    variantId: z.string().optional().nullable(),
  })
  .strict();

export const MetaDataCreateManyCategoryInputObjectSchema = Schema;
