import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ImageOrderByInputObjectSchema } from "./ImageOrderByInput.schema";
import { OptionsOrderByCompositeAggregateInputObjectSchema } from "./OptionsOrderByCompositeAggregateInput.schema";
import { QuantityOrderByInputObjectSchema } from "./QuantityOrderByInput.schema";
import { MetaDataOrderByRelationAggregateInputObjectSchema } from "./MetaDataOrderByRelationAggregateInput.schema";
import { ProductOrderByWithRelationInputObjectSchema } from "./ProductOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => ImageOrderByInputObjectSchema).optional(),
    options: z
      .lazy(() => OptionsOrderByCompositeAggregateInputObjectSchema)
      .optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    taxPercent: z.lazy(() => SortOrderSchema).optional(),
    barcode: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    length: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => QuantityOrderByInputObjectSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    MetaData: z
      .lazy(() => MetaDataOrderByRelationAggregateInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const VariantOrderByWithRelationInputObjectSchema = Schema;
