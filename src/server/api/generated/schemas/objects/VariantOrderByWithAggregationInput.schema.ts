import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { VariantCountOrderByAggregateInputObjectSchema } from "./VariantCountOrderByAggregateInput.schema";
import { VariantAvgOrderByAggregateInputObjectSchema } from "./VariantAvgOrderByAggregateInput.schema";
import { VariantMaxOrderByAggregateInputObjectSchema } from "./VariantMaxOrderByAggregateInput.schema";
import { VariantMinOrderByAggregateInputObjectSchema } from "./VariantMinOrderByAggregateInput.schema";
import { VariantSumOrderByAggregateInputObjectSchema } from "./VariantSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    taxPercent: z.lazy(() => SortOrderSchema).optional(),
    barcode: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    length: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VariantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => VariantAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VariantMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VariantMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VariantSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const VariantOrderByWithAggregationInputObjectSchema = Schema;
