import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VariantScalarWhereInputObjectSchema),
        z.lazy(() => VariantScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VariantScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VariantScalarWhereInputObjectSchema),
        z.lazy(() => VariantScalarWhereInputObjectSchema).array(),
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
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const VariantScalarWhereInputObjectSchema = Schema;
