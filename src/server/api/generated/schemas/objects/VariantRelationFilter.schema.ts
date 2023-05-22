import { z } from "zod";
import { VariantWhereInputObjectSchema } from "./VariantWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantRelationFilter> = z
  .object({
    is: z
      .lazy(() => VariantWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VariantWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VariantRelationFilterObjectSchema = Schema;
