import { z } from "zod";
import { MetaDataCreateWithoutProductInputObjectSchema } from "./MetaDataCreateWithoutProductInput.schema";
import { MetaDataUncheckedCreateWithoutProductInputObjectSchema } from "./MetaDataUncheckedCreateWithoutProductInput.schema";
import { MetaDataCreateOrConnectWithoutProductInputObjectSchema } from "./MetaDataCreateOrConnectWithoutProductInput.schema";
import { MetaDataUpsertWithWhereUniqueWithoutProductInputObjectSchema } from "./MetaDataUpsertWithWhereUniqueWithoutProductInput.schema";
import { MetaDataCreateManyProductInputEnvelopeObjectSchema } from "./MetaDataCreateManyProductInputEnvelope.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";
import { MetaDataUpdateWithWhereUniqueWithoutProductInputObjectSchema } from "./MetaDataUpdateWithWhereUniqueWithoutProductInput.schema";
import { MetaDataUpdateManyWithWhereWithoutProductInputObjectSchema } from "./MetaDataUpdateManyWithWhereWithoutProductInput.schema";
import { MetaDataScalarWhereInputObjectSchema } from "./MetaDataScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateManyWithoutProductNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MetaDataCreateWithoutProductInputObjectSchema),
        z.lazy(() => MetaDataCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => MetaDataUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => MetaDataUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MetaDataCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => MetaDataCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => MetaDataUpsertWithWhereUniqueWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => MetaDataUpsertWithWhereUniqueWithoutProductInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MetaDataCreateManyProductInputEnvelopeObjectSchema)
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
          () => MetaDataUpdateWithWhereUniqueWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => MetaDataUpdateWithWhereUniqueWithoutProductInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => MetaDataUpdateManyWithWhereWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => MetaDataUpdateManyWithWhereWithoutProductInputObjectSchema
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

export const MetaDataUpdateManyWithoutProductNestedInputObjectSchema = Schema;
