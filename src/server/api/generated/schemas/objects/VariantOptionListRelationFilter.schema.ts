import { z } from "zod";
import { VariantOptionWhereInputObjectSchema } from "./VariantOptionWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionListRelationFilter> = z
  .object({
    every: z.lazy(() => VariantOptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => VariantOptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => VariantOptionWhereInputObjectSchema).optional(),
  })
  .strict();

export const VariantOptionListRelationFilterObjectSchema = Schema;
