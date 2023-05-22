import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { MediaCountOrderByAggregateInputObjectSchema } from "./MediaCountOrderByAggregateInput.schema";
import { MediaMaxOrderByAggregateInputObjectSchema } from "./MediaMaxOrderByAggregateInput.schema";
import { MediaMinOrderByAggregateInputObjectSchema } from "./MediaMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MediaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MediaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MediaMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MediaMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MediaOrderByWithAggregationInputObjectSchema = Schema;
