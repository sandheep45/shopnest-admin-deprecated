import { z } from "zod";
import { UserCreateNestedOneWithoutCustomerReviewInputObjectSchema } from "./UserCreateNestedOneWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    rating: z.number(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    customer: z.lazy(
      () => UserCreateNestedOneWithoutCustomerReviewInputObjectSchema
    ),
  })
  .strict();

export const CustomerReviewCreateWithoutProductInputObjectSchema = Schema;
