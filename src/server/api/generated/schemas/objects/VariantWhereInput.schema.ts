import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { ImageCompositeFilterObjectSchema } from "./ImageCompositeFilter.schema";
import { ImageObjectEqualityInputObjectSchema } from "./ImageObjectEqualityInput.schema";
import { OptionsCompositeListFilterObjectSchema } from "./OptionsCompositeListFilter.schema";
import { OptionsObjectEqualityInputObjectSchema } from "./OptionsObjectEqualityInput.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { QuantityCompositeFilterObjectSchema } from "./QuantityCompositeFilter.schema";
import { QuantityObjectEqualityInputObjectSchema } from "./QuantityObjectEqualityInput.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { MetaDataListRelationFilterObjectSchema } from "./MetaDataListRelationFilter.schema";
import { ProductRelationFilterObjectSchema } from "./ProductRelationFilter.schema";
import { ProductWhereInputObjectSchema } from "./ProductWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VariantWhereInputObjectSchema),
        z.lazy(() => VariantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VariantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VariantWhereInputObjectSchema),
        z.lazy(() => VariantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([
        z.lazy(() => ImageCompositeFilterObjectSchema),
        z.lazy(() => ImageObjectEqualityInputObjectSchema),
      ])
      .optional(),
    options: z
      .union([
        z.lazy(() => OptionsCompositeListFilterObjectSchema),
        z.lazy(() => OptionsObjectEqualityInputObjectSchema).array(),
        z.lazy(() => OptionsObjectEqualityInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    sku: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    taxPercent: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    barcode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    height: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    width: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    length: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    weight: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    quantity: z
      .union([
        z.lazy(() => QuantityCompositeFilterObjectSchema),
        z.lazy(() => QuantityObjectEqualityInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    MetaData: z.lazy(() => MetaDataListRelationFilterObjectSchema).optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const VariantWhereInputObjectSchema = Schema;
