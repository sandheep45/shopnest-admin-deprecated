import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    categoryId: z.string().optional().nullable(),
    productId: z.string().optional().nullable(),
    variantId: z.string().optional().nullable(),
  })
  .strict();

export const MetaDataCreateManyInputObjectSchema = Schema;