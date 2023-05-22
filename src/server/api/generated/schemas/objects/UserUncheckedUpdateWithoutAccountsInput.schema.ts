import { z } from "zod";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { RoleSchema } from "../enums/Role.schema";
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from "./EnumRoleFieldUpdateOperationsInput.schema";
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema";
import { CustomerReviewUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema } from "./CustomerReviewUncheckedUpdateManyWithoutCustomerNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    username: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => RoleSchema),
        z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(
        () =>
          CustomerReviewUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutAccountsInputObjectSchema = Schema;
