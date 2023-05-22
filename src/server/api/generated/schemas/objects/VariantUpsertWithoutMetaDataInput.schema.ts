import { z } from "zod";
import { VariantUpdateWithoutMetaDataInputObjectSchema } from "./VariantUpdateWithoutMetaDataInput.schema";
import { VariantUncheckedUpdateWithoutMetaDataInputObjectSchema } from "./VariantUncheckedUpdateWithoutMetaDataInput.schema";
import { VariantCreateWithoutMetaDataInputObjectSchema } from "./VariantCreateWithoutMetaDataInput.schema";
import { VariantUncheckedCreateWithoutMetaDataInputObjectSchema } from "./VariantUncheckedCreateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantUpsertWithoutMetaDataInput> = z
  .object({
    update: z.union([
      z.lazy(() => VariantUpdateWithoutMetaDataInputObjectSchema),
      z.lazy(() => VariantUncheckedUpdateWithoutMetaDataInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VariantCreateWithoutMetaDataInputObjectSchema),
      z.lazy(() => VariantUncheckedCreateWithoutMetaDataInputObjectSchema),
    ]),
  })
  .strict();

export const VariantUpsertWithoutMetaDataInputObjectSchema = Schema;
