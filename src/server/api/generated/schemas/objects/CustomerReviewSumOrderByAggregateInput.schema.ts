import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewSumOrderByAggregateInput> = z
  .object({
    rating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CustomerReviewSumOrderByAggregateInputObjectSchema = Schema;
