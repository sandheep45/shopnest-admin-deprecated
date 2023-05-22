import { z } from "zod";
import { ProductUpdateWithoutVariantInputObjectSchema } from "./ProductUpdateWithoutVariantInput.schema";
import { ProductUncheckedUpdateWithoutVariantInputObjectSchema } from "./ProductUncheckedUpdateWithoutVariantInput.schema";
import { ProductCreateWithoutVariantInputObjectSchema } from "./ProductCreateWithoutVariantInput.schema";
import { ProductUncheckedCreateWithoutVariantInputObjectSchema } from "./ProductUncheckedCreateWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpsertWithoutVariantInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutVariantInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutVariantInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutVariantInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutVariantInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutVariantInputObjectSchema = Schema;
