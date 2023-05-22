import { z } from "zod";
import { ProductCreateWithoutCustomerReviewInputObjectSchema } from "./ProductCreateWithoutCustomerReviewInput.schema";
import { ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./ProductUncheckedCreateWithoutCustomerReviewInput.schema";
import { ProductCreateOrConnectWithoutCustomerReviewInputObjectSchema } from "./ProductCreateOrConnectWithoutCustomerReviewInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCustomerReviewInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutCustomerReviewInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ProductCreateOrConnectWithoutCustomerReviewInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutCustomerReviewInputObjectSchema =
  Schema;
