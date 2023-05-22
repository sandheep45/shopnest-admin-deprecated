import { z } from "zod";
import { ProductCreateNestedOneWithoutOptionInputObjectSchema } from "./ProductCreateNestedOneWithoutOptionInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    values: z.string(),
    Product: z
      .lazy(() => ProductCreateNestedOneWithoutOptionInputObjectSchema)
      .optional(),
  })
  .strict();

export const VariantOptionCreateInputObjectSchema = Schema;
