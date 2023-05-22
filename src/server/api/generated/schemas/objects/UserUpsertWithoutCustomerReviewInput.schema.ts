import { z } from "zod";
import { UserUpdateWithoutCustomerReviewInputObjectSchema } from "./UserUpdateWithoutCustomerReviewInput.schema";
import { UserUncheckedUpdateWithoutCustomerReviewInputObjectSchema } from "./UserUncheckedUpdateWithoutCustomerReviewInput.schema";
import { UserCreateWithoutCustomerReviewInputObjectSchema } from "./UserCreateWithoutCustomerReviewInput.schema";
import { UserUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutCustomerReviewInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCustomerReviewInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCustomerReviewInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCustomerReviewInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCustomerReviewInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCustomerReviewInputObjectSchema = Schema;
