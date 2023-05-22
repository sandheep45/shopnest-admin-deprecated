import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { CustomerReviewCreateNestedManyWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateNestedManyWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(
        () => CustomerReviewCreateNestedManyWithoutCustomerInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
