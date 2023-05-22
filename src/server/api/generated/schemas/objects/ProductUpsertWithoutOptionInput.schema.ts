import { z } from "zod";
import { ProductUpdateWithoutOptionInputObjectSchema } from "./ProductUpdateWithoutOptionInput.schema";
import { ProductUncheckedUpdateWithoutOptionInputObjectSchema } from "./ProductUncheckedUpdateWithoutOptionInput.schema";
import { ProductCreateWithoutOptionInputObjectSchema } from "./ProductCreateWithoutOptionInput.schema";
import { ProductUncheckedCreateWithoutOptionInputObjectSchema } from "./ProductUncheckedCreateWithoutOptionInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpsertWithoutOptionInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutOptionInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutOptionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOptionInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOptionInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutOptionInputObjectSchema = Schema;
