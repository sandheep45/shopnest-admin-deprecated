import { z } from "zod";
import { ProductCreateWithoutOptionInputObjectSchema } from "./ProductCreateWithoutOptionInput.schema";
import { ProductUncheckedCreateWithoutOptionInputObjectSchema } from "./ProductUncheckedCreateWithoutOptionInput.schema";
import { ProductCreateOrConnectWithoutOptionInputObjectSchema } from "./ProductCreateOrConnectWithoutOptionInput.schema";
import { ProductUpsertWithoutOptionInputObjectSchema } from "./ProductUpsertWithoutOptionInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductUpdateWithoutOptionInputObjectSchema } from "./ProductUpdateWithoutOptionInput.schema";
import { ProductUncheckedUpdateWithoutOptionInputObjectSchema } from "./ProductUncheckedUpdateWithoutOptionInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutOptionNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutOptionInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutOptionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutOptionInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ProductUpsertWithoutOptionInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutOptionInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutOptionInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutOptionNestedInputObjectSchema = Schema;
