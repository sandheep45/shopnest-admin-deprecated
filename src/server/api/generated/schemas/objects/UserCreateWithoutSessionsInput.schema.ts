import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { CustomerReviewCreateNestedManyWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateNestedManyWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(
        () => CustomerReviewCreateNestedManyWithoutCustomerInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutSessionsInputObjectSchema = Schema;
