import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCustomerReviewInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      username: z.string().optional().nullable(),
      emailVerified: z.coerce.date().optional().nullable(),
      role: z.lazy(() => RoleSchema).optional(),
      image: z.string().optional().nullable(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutCustomerReviewInputObjectSchema = Schema;
