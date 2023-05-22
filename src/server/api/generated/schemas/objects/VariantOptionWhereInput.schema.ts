import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { ProductRelationFilterObjectSchema } from "./ProductRelationFilter.schema";
import { ProductWhereInputObjectSchema } from "./ProductWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VariantOptionWhereInputObjectSchema),
        z.lazy(() => VariantOptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VariantOptionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VariantOptionWhereInputObjectSchema),
        z.lazy(() => VariantOptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    values: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const VariantOptionWhereInputObjectSchema = Schema;
