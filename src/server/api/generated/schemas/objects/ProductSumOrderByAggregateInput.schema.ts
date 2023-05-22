import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z
  .object({
    taxPercent: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductSumOrderByAggregateInputObjectSchema = Schema;
