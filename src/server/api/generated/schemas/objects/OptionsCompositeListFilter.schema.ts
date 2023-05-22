import { z } from "zod";
import { OptionsObjectEqualityInputObjectSchema } from "./OptionsObjectEqualityInput.schema";
import { OptionsWhereInputObjectSchema } from "./OptionsWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsCompositeListFilter> = z
  .object({
    equals: z
      .union([
        z.lazy(() => OptionsObjectEqualityInputObjectSchema),
        z.lazy(() => OptionsObjectEqualityInputObjectSchema).array(),
      ])
      .optional(),
    every: z.lazy(() => OptionsWhereInputObjectSchema).optional(),
    some: z.lazy(() => OptionsWhereInputObjectSchema).optional(),
    none: z.lazy(() => OptionsWhereInputObjectSchema).optional(),
    isEmpty: z.boolean().optional(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const OptionsCompositeListFilterObjectSchema = Schema;
