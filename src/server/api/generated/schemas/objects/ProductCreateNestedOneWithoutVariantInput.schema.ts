import { z } from "zod";
import { ProductCreateWithoutVariantInputObjectSchema } from "./ProductCreateWithoutVariantInput.schema";
import { ProductUncheckedCreateWithoutVariantInputObjectSchema } from "./ProductUncheckedCreateWithoutVariantInput.schema";
import { ProductCreateOrConnectWithoutVariantInputObjectSchema } from "./ProductCreateOrConnectWithoutVariantInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutVariantInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutVariantInputObjectSchema = Schema;
