import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { CategoryUpdateOneWithoutMetaDataNestedInputObjectSchema } from "./CategoryUpdateOneWithoutMetaDataNestedInput.schema";
import { VariantUpdateOneWithoutMetaDataNestedInputObjectSchema } from "./VariantUpdateOneWithoutMetaDataNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateWithoutProductInput> = z
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
    Variant: z
      .lazy(() => VariantUpdateOneWithoutMetaDataNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataUpdateWithoutProductInputObjectSchema = Schema;
