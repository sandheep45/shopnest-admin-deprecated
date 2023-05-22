import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithoutVariantInputObjectSchema } from "./MetaDataUpdateWithoutVariantInput.schema";
import { MetaDataUncheckedUpdateWithoutVariantInputObjectSchema } from "./MetaDataUncheckedUpdateWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateWithWhereUniqueWithoutVariantInput> =
  z
    .object({
      where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MetaDataUpdateWithoutVariantInputObjectSchema),
        z.lazy(() => MetaDataUncheckedUpdateWithoutVariantInputObjectSchema),
      ]),
    })
    .strict();

export const MetaDataUpdateWithWhereUniqueWithoutVariantInputObjectSchema =
  Schema;
