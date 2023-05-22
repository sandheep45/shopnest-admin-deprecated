import { z } from "zod";
import { ProductCreateWithoutOptionInputObjectSchema } from "./ProductCreateWithoutOptionInput.schema";
import { ProductUncheckedCreateWithoutOptionInputObjectSchema } from "./ProductUncheckedCreateWithoutOptionInput.schema";
import { ProductCreateOrConnectWithoutOptionInputObjectSchema } from "./ProductCreateOrConnectWithoutOptionInput.schema";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOptionInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutOptionInputObjectSchema = Schema;
