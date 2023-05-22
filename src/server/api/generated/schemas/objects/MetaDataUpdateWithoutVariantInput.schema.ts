import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { CategoryUpdateOneWithoutMetaDataNestedInputObjectSchema } from "./CategoryUpdateOneWithoutMetaDataNestedInput.schema";
import { ProductUpdateOneWithoutMetaDataNestedInputObjectSchema } from "./ProductUpdateOneWithoutMetaDataNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateWithoutVariantInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    keywords: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Category: z
      .lazy(() => CategoryUpdateOneWithoutMetaDataNestedInputObjectSchema)
      .optional(),
    Product: z
      .lazy(() => ProductUpdateOneWithoutMetaDataNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataUpdateWithoutVariantInputObjectSchema = Schema;
