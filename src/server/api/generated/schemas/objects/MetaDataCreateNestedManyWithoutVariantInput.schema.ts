import { z } from "zod";
import { MetaDataCreateWithoutVariantInputObjectSchema } from "./MetaDataCreateWithoutVariantInput.schema";
import { MetaDataUncheckedCreateWithoutVariantInputObjectSchema } from "./MetaDataUncheckedCreateWithoutVariantInput.schema";
import { MetaDataCreateOrConnectWithoutVariantInputObjectSchema } from "./MetaDataCreateOrConnectWithoutVariantInput.schema";
import { MetaDataCreateManyVariantInputEnvelopeObjectSchema } from "./MetaDataCreateManyVariantInputEnvelope.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateNestedManyWithoutVariantInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MetaDataCreateWithoutVariantInputObjectSchema),
        z.lazy(() => MetaDataCreateWithoutVariantInputObjectSchema).array(),
        z.lazy(() => MetaDataUncheckedCreateWithoutVariantInputObjectSchema),
        z
          .lazy(() => MetaDataUncheckedCreateWithoutVariantInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MetaDataCreateOrConnectWithoutVariantInputObjectSchema),
        z
          .lazy(() => MetaDataCreateOrConnectWithoutVariantInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MetaDataCreateManyVariantInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
        z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MetaDataCreateNestedManyWithoutVariantInputObjectSchema = Schema;
