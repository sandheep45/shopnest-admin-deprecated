import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithoutVariantInputObjectSchema } from "./MetaDataUpdateWithoutVariantInput.schema";
import { MetaDataUncheckedUpdateWithoutVariantInputObjectSchema } from "./MetaDataUncheckedUpdateWithoutVariantInput.schema";
import { MetaDataCreateWithoutVariantInputObjectSchema } from "./MetaDataCreateWithoutVariantInput.schema";
import { MetaDataUncheckedCreateWithoutVariantInputObjectSchema } from "./MetaDataUncheckedCreateWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpsertWithWhereUniqueWithoutVariantInput> =
  z
    .object({
      where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MetaDataUpdateWithoutVariantInputObjectSchema),
        z.lazy(() => MetaDataUncheckedUpdateWithoutVariantInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MetaDataCreateWithoutVariantInputObjectSchema),
        z.lazy(() => MetaDataUncheckedCreateWithoutVariantInputObjectSchema),
      ]),
    })
    .strict();

export const MetaDataUpsertWithWhereUniqueWithoutVariantInputObjectSchema =
  Schema;
