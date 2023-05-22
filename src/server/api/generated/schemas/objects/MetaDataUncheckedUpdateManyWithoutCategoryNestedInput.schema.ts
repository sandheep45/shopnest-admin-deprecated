import { z } from "zod";
import { MetaDataCreateWithoutCategoryInputObjectSchema } from "./MetaDataCreateWithoutCategoryInput.schema";
import { MetaDataUncheckedCreateWithoutCategoryInputObjectSchema } from "./MetaDataUncheckedCreateWithoutCategoryInput.schema";
import { MetaDataCreateOrConnectWithoutCategoryInputObjectSchema } from "./MetaDataCreateOrConnectWithoutCategoryInput.schema";
import { MetaDataUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from "./MetaDataUpsertWithWhereUniqueWithoutCategoryInput.schema";
import { MetaDataCreateManyCategoryInputEnvelopeObjectSchema } from "./MetaDataCreateManyCategoryInputEnvelope.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from "./MetaDataUpdateWithWhereUniqueWithoutCategoryInput.schema";
import { MetaDataUpdateManyWithWhereWithoutCategoryInputObjectSchema } from "./MetaDataUpdateManyWithWhereWithoutCategoryInput.schema";
import { MetaDataScalarWhereInputObjectSchema } from "./MetaDataScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MetaDataCreateWithoutCategoryInputObjectSchema),
          z.lazy(() => MetaDataCreateWithoutCategoryInputObjectSchema).array(),
          z.lazy(() => MetaDataUncheckedCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => MetaDataUncheckedCreateWithoutCategoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MetaDataCreateOrConnectWithoutCategoryInputObjectSchema),
          z
            .lazy(() => MetaDataCreateOrConnectWithoutCategoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MetaDataUpsertWithWhereUniqueWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                MetaDataUpsertWithWhereUniqueWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MetaDataCreateManyCategoryInputEnvelopeObjectSchema)
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
            () => MetaDataUpdateWithWhereUniqueWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                MetaDataUpdateWithWhereUniqueWithoutCategoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MetaDataUpdateManyWithWhereWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => MetaDataUpdateManyWithWhereWithoutCategoryInputObjectSchema
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

export const MetaDataUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
