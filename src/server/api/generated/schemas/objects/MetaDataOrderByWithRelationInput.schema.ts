import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CategoryOrderByWithRelationInputObjectSchema } from "./CategoryOrderByWithRelationInput.schema";
import { ProductOrderByWithRelationInputObjectSchema } from "./ProductOrderByWithRelationInput.schema";
import { VariantOrderByWithRelationInputObjectSchema } from "./VariantOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    keywords: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    variantId: z.lazy(() => SortOrderSchema).optional(),
    Category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    Product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    Variant: z
      .lazy(() => VariantOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataOrderByWithRelationInputObjectSchema = Schema;
