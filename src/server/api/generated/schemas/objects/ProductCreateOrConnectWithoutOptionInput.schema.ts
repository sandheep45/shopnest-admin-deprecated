import { z } from "zod";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductCreateWithoutOptionInputObjectSchema } from "./ProductCreateWithoutOptionInput.schema";
import { ProductUncheckedCreateWithoutOptionInputObjectSchema } from "./ProductUncheckedCreateWithoutOptionInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOptionInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOptionInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOptionInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutOptionInputObjectSchema = Schema;
