import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    values: z.string(),
  })
  .strict();

export const VariantOptionCreateWithoutProductInputObjectSchema = Schema;
