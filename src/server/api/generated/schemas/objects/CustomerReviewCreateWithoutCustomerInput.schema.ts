import { z } from "zod";
import { ProductCreateNestedOneWithoutCustomerReviewInputObjectSchema } from "./ProductCreateNestedOneWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateWithoutCustomerInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    rating: z.number(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutCustomerReviewInputObjectSchema
    ),
  })
  .strict();

export const CustomerReviewCreateWithoutCustomerInputObjectSchema = Schema;
