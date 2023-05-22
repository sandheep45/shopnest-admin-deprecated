import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ProductUpdateOneWithoutOptionNestedInputObjectSchema } from "./ProductUpdateOneWithoutOptionNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    values: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Product: z
      .lazy(() => ProductUpdateOneWithoutOptionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const VariantOptionUpdateInputObjectSchema = Schema;
