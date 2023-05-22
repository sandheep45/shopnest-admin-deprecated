import { z } from "zod";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductCreateWithoutCustomerReviewInputObjectSchema } from "./ProductCreateWithoutCustomerReviewInput.schema";
import { ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./ProductUncheckedCreateWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCustomerReviewInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutCustomerReviewInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutCustomerReviewInputObjectSchema =
  Schema;
