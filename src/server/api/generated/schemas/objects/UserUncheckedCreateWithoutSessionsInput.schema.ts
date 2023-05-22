import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { CustomerReviewUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedCreateNestedManyWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(
        () =>
          CustomerReviewUncheckedCreateNestedManyWithoutCustomerInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutSessionsInputObjectSchema = Schema;
