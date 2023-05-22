import { z } from "zod";
import { ProductWhereUniqueInputObjectSchema } from "./ProductWhereUniqueInput.schema";
import { ProductCreateWithoutMetaDataInputObjectSchema } from "./ProductCreateWithoutMetaDataInput.schema";
import { ProductUncheckedCreateWithoutMetaDataInputObjectSchema } from "./ProductUncheckedCreateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutMetaDataInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutMetaDataInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutMetaDataInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutMetaDataInputObjectSchema = Schema;
