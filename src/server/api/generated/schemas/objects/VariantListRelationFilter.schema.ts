import { z } from "zod";
import { VariantWhereInputObjectSchema } from "./VariantWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantListRelationFilter> = z
  .object({
    every: z.lazy(() => VariantWhereInputObjectSchema).optional(),
    some: z.lazy(() => VariantWhereInputObjectSchema).optional(),
    none: z.lazy(() => VariantWhereInputObjectSchema).optional(),
  })
  .strict();

export const VariantListRelationFilterObjectSchema = Schema;
