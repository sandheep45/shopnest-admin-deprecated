import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { VariantOptionCountOrderByAggregateInputObjectSchema } from "./VariantOptionCountOrderByAggregateInput.schema";
import { VariantOptionMaxOrderByAggregateInputObjectSchema } from "./VariantOptionMaxOrderByAggregateInput.schema";
import { VariantOptionMinOrderByAggregateInputObjectSchema } from "./VariantOptionMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    values: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VariantOptionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => VariantOptionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => VariantOptionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const VariantOptionOrderByWithAggregationInputObjectSchema = Schema;
