import { z } from "zod";
import { QuantityObjectEqualityInputObjectSchema } from "./QuantityObjectEqualityInput.schema";
import { QuantityWhereInputObjectSchema } from "./QuantityWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuantityCompositeFilter> = z
  .object({
    equals: z.lazy(() => QuantityObjectEqualityInputObjectSchema).optional(),
    is: z.lazy(() => QuantityWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => QuantityWhereInputObjectSchema).optional(),
  })
  .strict();

export const QuantityCompositeFilterObjectSchema = Schema;
