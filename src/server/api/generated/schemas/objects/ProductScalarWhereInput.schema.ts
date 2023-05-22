import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { EnumStatusFilterObjectSchema } from "./EnumStatusFilter.schema";
import { StatusSchema } from "../enums/Status.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const ProductScalarWhereInputObjectSchema = Schema;
