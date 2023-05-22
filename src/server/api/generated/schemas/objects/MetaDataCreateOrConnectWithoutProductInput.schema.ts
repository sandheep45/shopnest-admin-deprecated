import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataCreateWithoutProductInputObjectSchema } from "./MetaDataCreateWithoutProductInput.schema";
import { MetaDataUncheckedCreateWithoutProductInputObjectSchema } from "./MetaDataUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MetaDataCreateWithoutProductInputObjectSchema),
      z.lazy(() => MetaDataUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const MetaDataCreateOrConnectWithoutProductInputObjectSchema = Schema;
