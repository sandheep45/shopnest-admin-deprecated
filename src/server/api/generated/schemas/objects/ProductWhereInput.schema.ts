import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { ImageCompositeFilterObjectSchema } from "./ImageCompositeFilter.schema";
import { ImageObjectEqualityInputObjectSchema } from "./ImageObjectEqualityInput.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { EnumStatusFilterObjectSchema } from "./EnumStatusFilter.schema";
import { StatusSchema } from "../enums/Status.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { VariantListRelationFilterObjectSchema } from "./VariantListRelationFilter.schema";
import { VariantOptionListRelationFilterObjectSchema } from "./VariantOptionListRelationFilter.schema";
import { MetaDataListRelationFilterObjectSchema } from "./MetaDataListRelationFilter.schema";
import { CustomerReviewListRelationFilterObjectSchema } from "./CustomerReviewListRelationFilter.schema";
import { CategoryRelationFilterObjectSchema } from "./CategoryRelationFilter.schema";
import { CategoryWhereInputObjectSchema } from "./CategoryWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([
        z.lazy(() => ImageCompositeFilterObjectSchema),
        z.lazy(() => ImageObjectEqualityInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tags: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    taxPercent: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumStatusFilterObjectSchema),
        z.lazy(() => StatusSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Variant: z.lazy(() => VariantListRelationFilterObjectSchema).optional(),
    option: z
      .lazy(() => VariantOptionListRelationFilterObjectSchema)
      .optional(),
    MetaData: z.lazy(() => MetaDataListRelationFilterObjectSchema).optional(),
    CustomerReview: z
      .lazy(() => CustomerReviewListRelationFilterObjectSchema)
      .optional(),
    Category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductWhereInputObjectSchema = Schema;
