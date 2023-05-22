import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ImageUpdateEnvelopeInputObjectSchema } from "./ImageUpdateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StatusSchema } from "../enums/Status.schema";
import { EnumStatusFieldUpdateOperationsInputObjectSchema } from "./EnumStatusFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { VariantUpdateManyWithoutProductNestedInputObjectSchema } from "./VariantUpdateManyWithoutProductNestedInput.schema";
import { VariantOptionUpdateManyWithoutProductNestedInputObjectSchema } from "./VariantOptionUpdateManyWithoutProductNestedInput.schema";
import { MetaDataUpdateManyWithoutProductNestedInputObjectSchema } from "./MetaDataUpdateManyWithoutProductNestedInput.schema";
import { CustomerReviewUpdateManyWithoutProductNestedInputObjectSchema } from "./CustomerReviewUpdateManyWithoutProductNestedInput.schema";
import { CategoryUpdateOneRequiredWithoutProductNestedInputObjectSchema } from "./CategoryUpdateOneRequiredWithoutProductNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpdateInput> = z
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
    Variant: z
      .lazy(() => VariantUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    option: z
      .lazy(() => VariantOptionUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    MetaData: z
      .lazy(() => MetaDataUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(() => CustomerReviewUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    Category: z
      .lazy(
        () => CategoryUpdateOneRequiredWithoutProductNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProductUpdateInputObjectSchema = Schema;
