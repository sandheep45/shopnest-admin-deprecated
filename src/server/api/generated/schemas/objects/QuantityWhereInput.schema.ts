import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuantityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuantityWhereInputObjectSchema),
        z.lazy(() => QuantityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuantityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuantityWhereInputObjectSchema),
        z.lazy(() => QuantityWhereInputObjectSchema).array(),
      ])
      .optional(),
    onSelf: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    inWareHouse: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const QuantityWhereInputObjectSchema = Schema;
