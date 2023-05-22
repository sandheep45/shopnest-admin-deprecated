import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutCustomerReviewNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutCustomerReviewNestedInput.schema";
import { ProductUpdateOneRequiredWithoutCustomerReviewNestedInputObjectSchema } from "./ProductUpdateOneRequiredWithoutCustomerReviewNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    rating: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comment: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    customer: z
      .lazy(
        () => UserUpdateOneRequiredWithoutCustomerReviewNestedInputObjectSchema
      )
      .optional(),
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutCustomerReviewNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const CustomerReviewUpdateInputObjectSchema = Schema;
