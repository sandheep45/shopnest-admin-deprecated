import { z } from "zod";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductCreateWithoutVariantInputObjectSchema } from "./ProductCreateWithoutVariantInput.schema";
import { ProductUncheckedCreateWithoutVariantInputObjectSchema } from "./ProductUncheckedCreateWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutVariantInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutVariantInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutVariantInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutVariantInputObjectSchema = Schema;
