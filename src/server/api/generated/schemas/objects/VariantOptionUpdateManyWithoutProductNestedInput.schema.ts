import { z } from "zod";
import { VariantOptionCreateWithoutProductInputObjectSchema } from "./VariantOptionCreateWithoutProductInput.schema";
import { VariantOptionUncheckedCreateWithoutProductInputObjectSchema } from "./VariantOptionUncheckedCreateWithoutProductInput.schema";
import { VariantOptionCreateOrConnectWithoutProductInputObjectSchema } from "./VariantOptionCreateOrConnectWithoutProductInput.schema";
import { VariantOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema } from "./VariantOptionUpsertWithWhereUniqueWithoutProductInput.schema";
import { VariantOptionCreateManyProductInputEnvelopeObjectSchema } from "./VariantOptionCreateManyProductInputEnvelope.schema";
import { VariantOptionWhereUniqueInputObjectSchema } from "./VariantOptionWhereUniqueInput.schema";
import { VariantOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema } from "./VariantOptionUpdateWithWhereUniqueWithoutProductInput.schema";
import { VariantOptionUpdateManyWithWhereWithoutProductInputObjectSchema } from "./VariantOptionUpdateManyWithWhereWithoutProductInput.schema";
import { VariantOptionScalarWhereInputObjectSchema } from "./VariantOptionScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VariantOptionCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => VariantOptionCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => VariantOptionUncheckedCreateWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () => VariantOptionUncheckedCreateWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => VariantOptionCreateOrConnectWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () => VariantOptionCreateOrConnectWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              VariantOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () =>
                VariantOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => VariantOptionCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              VariantOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () =>
                VariantOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              VariantOptionUpdateManyWithWhereWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () =>
                VariantOptionUpdateManyWithWhereWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => VariantOptionScalarWhereInputObjectSchema),
          z.lazy(() => VariantOptionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VariantOptionUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
