import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { CustomerReviewUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedCreateNestedManyWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    CustomerReview: z
      .lazy(
        () =>
          CustomerReviewUncheckedCreateNestedManyWithoutCustomerInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutAccountsInputObjectSchema = Schema;
