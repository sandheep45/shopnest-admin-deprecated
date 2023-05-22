import { z } from "zod";
import { UserCreateWithoutCustomerReviewInputObjectSchema } from "./UserCreateWithoutCustomerReviewInput.schema";
import { UserUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerReviewInput.schema";
import { UserCreateOrConnectWithoutCustomerReviewInputObjectSchema } from "./UserCreateOrConnectWithoutCustomerReviewInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCustomerReviewInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCustomerReviewInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCustomerReviewInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCustomerReviewInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCustomerReviewInputObjectSchema = Schema;
