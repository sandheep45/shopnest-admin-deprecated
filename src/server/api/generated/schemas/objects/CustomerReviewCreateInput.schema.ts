import { z } from "zod";
import { UserCreateNestedOneWithoutCustomerReviewInputObjectSchema } from "./UserCreateNestedOneWithoutCustomerReviewInput.schema";
import { ProductCreateNestedOneWithoutCustomerReviewInputObjectSchema } from "./ProductCreateNestedOneWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateInput> = z
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
    product: z.lazy(
      () => ProductCreateNestedOneWithoutCustomerReviewInputObjectSchema
    ),
  })
  .strict();

export const CustomerReviewCreateInputObjectSchema = Schema;
