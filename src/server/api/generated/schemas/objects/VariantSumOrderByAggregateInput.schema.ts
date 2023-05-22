import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantSumOrderByAggregateInput> = z
  .object({
    price: z.lazy(() => SortOrderSchema).optional(),
    taxPercent: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    length: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VariantSumOrderByAggregateInputObjectSchema = Schema;
