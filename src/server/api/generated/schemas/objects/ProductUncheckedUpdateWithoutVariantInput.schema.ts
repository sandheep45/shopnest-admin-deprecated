import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ImageUpdateEnvelopeInputObjectSchema } from "./ImageUpdateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StatusSchema } from "../enums/Status.schema";
import { EnumStatusFieldUpdateOperationsInputObjectSchema } from "./EnumStatusFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { VariantOptionUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from "./VariantOptionUncheckedUpdateManyWithoutProductNestedInput.schema";
import { MetaDataUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from "./MetaDataUncheckedUpdateManyWithoutProductNestedInput.schema";
import { CustomerReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from "./CustomerReviewUncheckedUpdateManyWithoutProductNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutVariantInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => ImageUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    taxPercent: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => StatusSchema),
        z.lazy(() => EnumStatusFieldUpdateOperationsInputObjectSchema),
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
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    option: z
      .lazy(
        () =>
          VariantOptionUncheckedUpdateManyWithoutProductNestedInputObjectSchema
      )
      .optional(),
    MetaData: z
      .lazy(
        () => MetaDataUncheckedUpdateManyWithoutProductNestedInputObjectSchema
      )
      .optional(),
    CustomerReview: z
      .lazy(
        () =>
          CustomerReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedUpdateWithoutVariantInputObjectSchema = Schema;
