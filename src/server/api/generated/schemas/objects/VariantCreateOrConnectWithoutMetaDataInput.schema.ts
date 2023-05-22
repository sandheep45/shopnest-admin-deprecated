import { z } from "zod";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";
import { VariantCreateWithoutMetaDataInputObjectSchema } from "./VariantCreateWithoutMetaDataInput.schema";
import { VariantUncheckedCreateWithoutMetaDataInputObjectSchema } from "./VariantUncheckedCreateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantCreateOrConnectWithoutMetaDataInput> = z
  .object({
    where: z.lazy(() => VariantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VariantCreateWithoutMetaDataInputObjectSchema),
      z.lazy(() => VariantUncheckedCreateWithoutMetaDataInputObjectSchema),
    ]),
  })
  .strict();

export const VariantCreateOrConnectWithoutMetaDataInputObjectSchema = Schema;
