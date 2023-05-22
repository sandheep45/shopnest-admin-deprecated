import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { ProductRelationFilterObjectSchema } from "./ProductRelationFilter.schema";
import { ProductWhereInputObjectSchema } from "./ProductWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CustomerReviewWhereInputObjectSchema),
        z.lazy(() => CustomerReviewWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CustomerReviewWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CustomerReviewWhereInputObjectSchema),
        z.lazy(() => CustomerReviewWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    rating: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    comment: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    customer: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CustomerReviewWhereInputObjectSchema = Schema;
