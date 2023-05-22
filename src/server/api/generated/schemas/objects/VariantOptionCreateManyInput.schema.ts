import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    values: z.string(),
    productId: z.string().optional().nullable(),
  })
  .strict();

export const VariantOptionCreateManyInputObjectSchema = Schema;
