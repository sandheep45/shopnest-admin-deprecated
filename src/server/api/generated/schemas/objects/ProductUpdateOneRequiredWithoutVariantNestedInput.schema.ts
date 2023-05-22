import { z } from "zod";
import { ProductCreateWithoutVariantInputObjectSchema } from "./ProductCreateWithoutVariantInput.schema";
import { ProductUncheckedCreateWithoutVariantInputObjectSchema } from "./ProductUncheckedCreateWithoutVariantInput.schema";
import { ProductCreateOrConnectWithoutVariantInputObjectSchema } from "./ProductCreateOrConnectWithoutVariantInput.schema";
import { ProductUpsertWithoutVariantInputObjectSchema } from "./ProductUpsertWithoutVariantInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductUpdateWithoutVariantInputObjectSchema } from "./ProductUpdateWithoutVariantInput.schema";
import { ProductUncheckedUpdateWithoutVariantInputObjectSchema } from "./ProductUncheckedUpdateWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutVariantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutVariantInputObjectSchema),
          z.lazy(() => ProductUncheckedCreateWithoutVariantInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutVariantInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutVariantInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutVariantInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutVariantInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutVariantNestedInputObjectSchema =
  Schema;
