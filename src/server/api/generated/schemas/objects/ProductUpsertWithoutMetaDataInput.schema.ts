import { z } from "zod";
import { ProductUpdateWithoutMetaDataInputObjectSchema } from "./ProductUpdateWithoutMetaDataInput.schema";
import { ProductUncheckedUpdateWithoutMetaDataInputObjectSchema } from "./ProductUncheckedUpdateWithoutMetaDataInput.schema";
import { ProductCreateWithoutMetaDataInputObjectSchema } from "./ProductCreateWithoutMetaDataInput.schema";
import { ProductUncheckedCreateWithoutMetaDataInputObjectSchema } from "./ProductUncheckedCreateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpsertWithoutMetaDataInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutMetaDataInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutMetaDataInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutMetaDataInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutMetaDataInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutMetaDataInputObjectSchema = Schema;
