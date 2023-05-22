import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutCustomerReviewInputObjectSchema } from "./UserCreateWithoutCustomerReviewInput.schema";
import { UserUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCustomerReviewInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCustomerReviewInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutCustomerReviewInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCustomerReviewInputObjectSchema = Schema;
