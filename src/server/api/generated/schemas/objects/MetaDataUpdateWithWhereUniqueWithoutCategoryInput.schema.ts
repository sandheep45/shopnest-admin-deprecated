import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithoutCategoryInputObjectSchema } from "./MetaDataUpdateWithoutCategoryInput.schema";
import { MetaDataUncheckedUpdateWithoutCategoryInputObjectSchema } from "./MetaDataUncheckedUpdateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MetaDataUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => MetaDataUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const MetaDataUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
