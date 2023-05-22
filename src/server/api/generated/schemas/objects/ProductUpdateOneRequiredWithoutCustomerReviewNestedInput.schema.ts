import { z } from "zod";
import { ProductCreateWithoutCustomerReviewInputObjectSchema } from "./ProductCreateWithoutCustomerReviewInput.schema";
import { ProductUncheckedCreateWithoutCustomerReviewInputObjectSchema } from "./ProductUncheckedCreateWithoutCustomerReviewInput.schema";
import { ProductCreateOrConnectWithoutCustomerReviewInputObjectSchema } from "./ProductCreateOrConnectWithoutCustomerReviewInput.schema";
import { ProductUpsertWithoutCustomerReviewInputObjectSchema } from "./ProductUpsertWithoutCustomerReviewInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductUpdateWithoutCustomerReviewInputObjectSchema } from "./ProductUpdateWithoutCustomerReviewInput.schema";
import { ProductUncheckedUpdateWithoutCustomerReviewInputObjectSchema } from "./ProductUncheckedUpdateWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCustomerReviewNestedInput> =
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
      upsert: z
        .lazy(() => ProductUpsertWithoutCustomerReviewInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutCustomerReviewInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutCustomerReviewInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutCustomerReviewNestedInputObjectSchema =
  Schema;
