import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ImageOrderByInputObjectSchema } from "./ImageOrderByInput.schema";
import { VariantOrderByRelationAggregateInputObjectSchema } from "./VariantOrderByRelationAggregateInput.schema";
import { VariantOptionOrderByRelationAggregateInputObjectSchema } from "./VariantOptionOrderByRelationAggregateInput.schema";
import { MetaDataOrderByRelationAggregateInputObjectSchema } from "./MetaDataOrderByRelationAggregateInput.schema";
import { CustomerReviewOrderByRelationAggregateInputObjectSchema } from "./CustomerReviewOrderByRelationAggregateInput.schema";
import { CategoryOrderByWithRelationInputObjectSchema } from "./CategoryOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => ImageOrderByInputObjectSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    taxPercent: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    Variant: z
      .lazy(() => VariantOrderByRelationAggregateInputObjectSchema)
      .optional(),
    option: z
      .lazy(() => VariantOptionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    MetaData: z
      .lazy(() => MetaDataOrderByRelationAggregateInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(() => CustomerReviewOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
