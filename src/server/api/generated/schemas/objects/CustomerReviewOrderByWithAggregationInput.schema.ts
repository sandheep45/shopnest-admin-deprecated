import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CustomerReviewCountOrderByAggregateInputObjectSchema } from "./CustomerReviewCountOrderByAggregateInput.schema";
import { CustomerReviewAvgOrderByAggregateInputObjectSchema } from "./CustomerReviewAvgOrderByAggregateInput.schema";
import { CustomerReviewMaxOrderByAggregateInputObjectSchema } from "./CustomerReviewMaxOrderByAggregateInput.schema";
import { CustomerReviewMinOrderByAggregateInputObjectSchema } from "./CustomerReviewMinOrderByAggregateInput.schema";
import { CustomerReviewSumOrderByAggregateInputObjectSchema } from "./CustomerReviewSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CustomerReviewCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => CustomerReviewAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CustomerReviewMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CustomerReviewMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => CustomerReviewSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerReviewOrderByWithAggregationInputObjectSchema = Schema;
