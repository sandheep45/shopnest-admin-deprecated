import { z } from "zod";
import { MetaDataCreateWithoutVariantInputObjectSchema } from "./MetaDataCreateWithoutVariantInput.schema";
import { MetaDataUncheckedCreateWithoutVariantInputObjectSchema } from "./MetaDataUncheckedCreateWithoutVariantInput.schema";
import { MetaDataCreateOrConnectWithoutVariantInputObjectSchema } from "./MetaDataCreateOrConnectWithoutVariantInput.schema";
import { MetaDataUpsertWithWhereUniqueWithoutVariantInputObjectSchema } from "./MetaDataUpsertWithWhereUniqueWithoutVariantInput.schema";
import { MetaDataCreateManyVariantInputEnvelopeObjectSchema } from "./MetaDataCreateManyVariantInputEnvelope.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithWhereUniqueWithoutVariantInputObjectSchema } from "./MetaDataUpdateWithWhereUniqueWithoutVariantInput.schema";
import { MetaDataUpdateManyWithWhereWithoutVariantInputObjectSchema } from "./MetaDataUpdateManyWithWhereWithoutVariantInput.schema";
import { MetaDataScalarWhereInputObjectSchema } from "./MetaDataScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUncheckedUpdateManyWithoutVariantNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => MetaDataUpsertWithWhereUniqueWithoutVariantInputObjectSchema
          ),
          z
            .lazy(
              () => MetaDataUpsertWithWhereUniqueWithoutVariantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MetaDataCreateManyVariantInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
          z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MetaDataUpdateWithWhereUniqueWithoutVariantInputObjectSchema
          ),
          z
            .lazy(
              () => MetaDataUpdateWithWhereUniqueWithoutVariantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MetaDataUpdateManyWithWhereWithoutVariantInputObjectSchema
          ),
          z
            .lazy(
              () => MetaDataUpdateManyWithWhereWithoutVariantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MetaDataScalarWhereInputObjectSchema),
          z.lazy(() => MetaDataScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MetaDataUncheckedUpdateManyWithoutVariantNestedInputObjectSchema =
  Schema;