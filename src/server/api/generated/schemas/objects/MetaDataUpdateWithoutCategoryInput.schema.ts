import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ProductUpdateOneWithoutMetaDataNestedInputObjectSchema } from "./ProductUpdateOneWithoutMetaDataNestedInput.schema";
import { VariantUpdateOneWithoutMetaDataNestedInputObjectSchema } from "./VariantUpdateOneWithoutMetaDataNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateWithoutCategoryInput> = z
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
    Product: z
      .lazy(() => ProductUpdateOneWithoutMetaDataNestedInputObjectSchema)
      .optional(),
    Variant: z
      .lazy(() => VariantUpdateOneWithoutMetaDataNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataUpdateWithoutCategoryInputObjectSchema = Schema;
