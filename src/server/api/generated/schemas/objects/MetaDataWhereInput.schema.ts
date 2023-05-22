import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { CategoryRelationFilterObjectSchema } from "./CategoryRelationFilter.schema";
import { CategoryWhereInputObjectSchema } from "./CategoryWhereInput.schema";
import { ProductRelationFilterObjectSchema } from "./ProductRelationFilter.schema";
import { ProductWhereInputObjectSchema } from "./ProductWhereInput.schema";
import { VariantRelationFilterObjectSchema } from "./VariantRelationFilter.schema";
import { VariantWhereInputObjectSchema } from "./VariantWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MetaDataWhereInputObjectSchema),
        z.lazy(() => MetaDataWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MetaDataWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MetaDataWhereInputObjectSchema),
        z.lazy(() => MetaDataWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    keywords: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    productId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    variantId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Variant: z
      .union([
        z.lazy(() => VariantRelationFilterObjectSchema),
        z.lazy(() => VariantWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const MetaDataWhereInputObjectSchema = Schema;
