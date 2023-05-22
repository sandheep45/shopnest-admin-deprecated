import { z } from "zod";
import { ProductCreateWithoutMetaDataInputObjectSchema } from "./ProductCreateWithoutMetaDataInput.schema";
import { ProductUncheckedCreateWithoutMetaDataInputObjectSchema } from "./ProductUncheckedCreateWithoutMetaDataInput.schema";
import { ProductCreateOrConnectWithoutMetaDataInputObjectSchema } from "./ProductCreateOrConnectWithoutMetaDataInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutMetaDataInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutMetaDataInputObjectSchema = Schema;
