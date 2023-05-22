import { z } from "zod";
import { VariantCreateWithoutMetaDataInputObjectSchema } from "./VariantCreateWithoutMetaDataInput.schema";
import { VariantUncheckedCreateWithoutMetaDataInputObjectSchema } from "./VariantUncheckedCreateWithoutMetaDataInput.schema";
import { VariantCreateOrConnectWithoutMetaDataInputObjectSchema } from "./VariantCreateOrConnectWithoutMetaDataInput.schema";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantCreateNestedOneWithoutMetaDataInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VariantCreateWithoutMetaDataInputObjectSchema),
        z.lazy(() => VariantUncheckedCreateWithoutMetaDataInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => VariantCreateOrConnectWithoutMetaDataInputObjectSchema)
      .optional(),
    connect: z.lazy(() => VariantWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const VariantCreateNestedOneWithoutMetaDataInputObjectSchema = Schema;
