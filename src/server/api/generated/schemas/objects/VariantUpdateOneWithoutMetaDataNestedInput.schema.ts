import { z } from "zod";
import { VariantCreateWithoutMetaDataInputObjectSchema } from "./VariantCreateWithoutMetaDataInput.schema";
import { VariantUncheckedCreateWithoutMetaDataInputObjectSchema } from "./VariantUncheckedCreateWithoutMetaDataInput.schema";
import { VariantCreateOrConnectWithoutMetaDataInputObjectSchema } from "./VariantCreateOrConnectWithoutMetaDataInput.schema";
import { VariantUpsertWithoutMetaDataInputObjectSchema } from "./VariantUpsertWithoutMetaDataInput.schema";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";
import { VariantUpdateWithoutMetaDataInputObjectSchema } from "./VariantUpdateWithoutMetaDataInput.schema";
import { VariantUncheckedUpdateWithoutMetaDataInputObjectSchema } from "./VariantUncheckedUpdateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantUpdateOneWithoutMetaDataNestedInput> = z
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
    upsert: z
      .lazy(() => VariantUpsertWithoutMetaDataInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VariantWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VariantUpdateWithoutMetaDataInputObjectSchema),
        z.lazy(() => VariantUncheckedUpdateWithoutMetaDataInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const VariantUpdateOneWithoutMetaDataNestedInputObjectSchema = Schema;
