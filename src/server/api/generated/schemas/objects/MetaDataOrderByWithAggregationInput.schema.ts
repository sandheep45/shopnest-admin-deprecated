import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { MetaDataCountOrderByAggregateInputObjectSchema } from "./MetaDataCountOrderByAggregateInput.schema";
import { MetaDataMaxOrderByAggregateInputObjectSchema } from "./MetaDataMaxOrderByAggregateInput.schema";
import { MetaDataMinOrderByAggregateInputObjectSchema } from "./MetaDataMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    keywords: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    variantId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MetaDataCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MetaDataMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MetaDataMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MetaDataOrderByWithAggregationInputObjectSchema = Schema;
