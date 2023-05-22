import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { StatusSchema } from "../enums/Status.schema";
import { EnumStatusFieldUpdateOperationsInputObjectSchema } from "./EnumStatusFieldUpdateOperationsInput.schema";
import { ImageUpdateEnvelopeInputObjectSchema } from "./ImageUpdateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { ProductUpdateManyWithoutCategoryNestedInputObjectSchema } from "./ProductUpdateManyWithoutCategoryNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpdateWithoutMetaDataInput> = z
  .object({
    name: z
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
    status: z
      .union([
        z.lazy(() => StatusSchema),
        z.lazy(() => EnumStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => ImageUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Product: z
      .lazy(() => ProductUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUpdateWithoutMetaDataInputObjectSchema = Schema;
