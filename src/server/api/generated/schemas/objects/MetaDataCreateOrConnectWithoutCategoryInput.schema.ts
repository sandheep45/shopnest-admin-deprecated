import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataCreateWithoutCategoryInputObjectSchema } from "./MetaDataCreateWithoutCategoryInput.schema";
import { MetaDataUncheckedCreateWithoutCategoryInputObjectSchema } from "./MetaDataUncheckedCreateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MetaDataCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => MetaDataUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const MetaDataCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
