import { z } from "zod";
import { UserCreateWithoutCustomerReviewInputObjectSchema } from "./UserCreateWithoutCustomerReviewInput.schema";
import { UserUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerReviewInput.schema";
import { UserCreateOrConnectWithoutCustomerReviewInputObjectSchema } from "./UserCreateOrConnectWithoutCustomerReviewInput.schema";
import { UserUpsertWithoutCustomerReviewInputObjectSchema } from "./UserUpsertWithoutCustomerReviewInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutCustomerReviewInputObjectSchema } from "./UserUpdateWithoutCustomerReviewInput.schema";
import { UserUncheckedUpdateWithoutCustomerReviewInputObjectSchema } from "./UserUncheckedUpdateWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCustomerReviewNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutCustomerReviewInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCustomerReviewInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCustomerReviewInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCustomerReviewNestedInputObjectSchema =
  Schema;
