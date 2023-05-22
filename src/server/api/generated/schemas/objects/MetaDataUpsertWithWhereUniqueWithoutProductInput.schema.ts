import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithoutProductInputObjectSchema } from "./MetaDataUpdateWithoutProductInput.schema";
import { MetaDataUncheckedUpdateWithoutProductInputObjectSchema } from "./MetaDataUncheckedUpdateWithoutProductInput.schema";
import { MetaDataCreateWithoutProductInputObjectSchema } from "./MetaDataCreateWithoutProductInput.schema";
import { MetaDataUncheckedCreateWithoutProductInputObjectSchema } from "./MetaDataUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MetaDataUpdateWithoutProductInputObjectSchema),
        z.lazy(() => MetaDataUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MetaDataCreateWithoutProductInputObjectSchema),
        z.lazy(() => MetaDataUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const MetaDataUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
