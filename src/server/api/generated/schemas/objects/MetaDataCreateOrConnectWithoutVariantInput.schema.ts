import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataCreateWithoutVariantInputObjectSchema } from "./MetaDataCreateWithoutVariantInput.schema";
import { MetaDataUncheckedCreateWithoutVariantInputObjectSchema } from "./MetaDataUncheckedCreateWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateOrConnectWithoutVariantInput> = z
  .object({
    where: z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MetaDataCreateWithoutVariantInputObjectSchema),
      z.lazy(() => MetaDataUncheckedCreateWithoutVariantInputObjectSchema),
    ]),
  })
  .strict();

export const MetaDataCreateOrConnectWithoutVariantInputObjectSchema = Schema;
