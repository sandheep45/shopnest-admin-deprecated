import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithoutProductInputObjectSchema } from "./MetaDataUpdateWithoutProductInput.schema";
import { MetaDataUncheckedUpdateWithoutProductInputObjectSchema } from "./MetaDataUncheckedUpdateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MetaDataUpdateWithoutProductInputObjectSchema),
        z.lazy(() => MetaDataUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const MetaDataUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
