import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithoutCategoryInputObjectSchema } from "./MetaDataUpdateWithoutCategoryInput.schema";
import { MetaDataUncheckedUpdateWithoutCategoryInputObjectSchema } from "./MetaDataUncheckedUpdateWithoutCategoryInput.schema";
import { MetaDataCreateWithoutCategoryInputObjectSchema } from "./MetaDataCreateWithoutCategoryInput.schema";
import { MetaDataUncheckedCreateWithoutCategoryInputObjectSchema } from "./MetaDataUncheckedCreateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MetaDataUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => MetaDataUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MetaDataCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => MetaDataUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const MetaDataUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
