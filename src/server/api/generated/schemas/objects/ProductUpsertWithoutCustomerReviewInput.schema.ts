import { z } from "zod";
import { ProductUpdateWithoutCustomerReviewInputObjectSchema } from "./ProductUpdateWithoutCustomerReviewInput.schema";
import { ProductUncheckedUpdateWithoutCustomerReviewInputObjectSchema } from "./ProductUncheckedUpdateWithoutCustomerReviewInput.schema";
import { ProductCreateWithoutCustomerReviewInputObjectSchema } from "./ProductCreateWithoutCustomerReviewInput.schema";
import { ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./ProductUncheckedCreateWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpsertWithoutCustomerReviewInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutCustomerReviewInputObjectSchema),
      z.lazy(
        () => ProductUncheckedUpdateWithoutCustomerReviewInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCustomerReviewInputObjectSchema),
      z.lazy(
        () => ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema
      ),
    ]),
  })
  .strict();

export const ProductUpsertWithoutCustomerReviewInputObjectSchema = Schema;
