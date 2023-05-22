import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ProductOrderByWithRelationInputObjectSchema } from "./ProductOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    values: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    Product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const VariantOptionOrderByWithRelationInputObjectSchema = Schema;
