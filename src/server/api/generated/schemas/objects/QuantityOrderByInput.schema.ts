import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuantityOrderByInput> = z
  .object({
    onSelf: z.lazy(() => SortOrderSchema).optional(),
    inWareHouse: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuantityOrderByInputObjectSchema = Schema;
