import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ImageOrderByInputObjectSchema } from "./ImageOrderByInput.schema";
import { ProductOrderByRelationAggregateInputObjectSchema } from "./ProductOrderByRelationAggregateInput.schema";
import { MetaDataOrderByRelationAggregateInputObjectSchema } from "./MetaDataOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => ImageOrderByInputObjectSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    Product: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
    MetaData: z
      .lazy(() => MetaDataOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryOrderByWithRelationInputObjectSchema = Schema;
