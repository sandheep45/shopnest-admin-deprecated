import { z } from "zod";
import { ProductCreateWithoutMetaDataInputObjectSchema } from "./ProductCreateWithoutMetaDataInput.schema";
import { ProductUncheckedCreateWithoutMetaDataInputObjectSchema } from "./ProductUncheckedCreateWithoutMetaDataInput.schema";
import { ProductCreateOrConnectWithoutMetaDataInputObjectSchema } from "./ProductCreateOrConnectWithoutMetaDataInput.schema";
import { ProductUpsertWithoutMetaDataInputObjectSchema } from "./ProductUpsertWithoutMetaDataInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductUpdateWithoutMetaDataInputObjectSchema } from "./ProductUpdateWithoutMetaDataInput.schema";
import { ProductUncheckedUpdateWithoutMetaDataInputObjectSchema } from "./ProductUncheckedUpdateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutMetaDataNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutMetaDataInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutMetaDataInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutMetaDataInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ProductUpsertWithoutMetaDataInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutMetaDataInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutMetaDataInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutMetaDataNestedInputObjectSchema = Schema;
