import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { EnumStatusFilterObjectSchema } from "./EnumStatusFilter.schema";
import { StatusSchema } from "../enums/Status.schema";
import { ImageCompositeFilterObjectSchema } from "./ImageCompositeFilter.schema";
import { ImageObjectEqualityInputObjectSchema } from "./ImageObjectEqualityInput.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { ProductListRelationFilterObjectSchema } from "./ProductListRelationFilter.schema";
import { MetaDataListRelationFilterObjectSchema } from "./MetaDataListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
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
    status: z
      .union([
        z.lazy(() => EnumStatusFilterObjectSchema),
        z.lazy(() => StatusSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => ImageCompositeFilterObjectSchema),
        z.lazy(() => ImageObjectEqualityInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Product: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
    MetaData: z.lazy(() => MetaDataListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CategoryWhereInputObjectSchema = Schema;
