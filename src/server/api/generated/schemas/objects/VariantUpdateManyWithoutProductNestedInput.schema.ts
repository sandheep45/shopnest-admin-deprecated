import { z } from "zod";
import { VariantCreateWithoutProductInputObjectSchema } from "./VariantCreateWithoutProductInput.schema";
import { VariantUncheckedCreateWithoutProductInputObjectSchema } from "./VariantUncheckedCreateWithoutProductInput.schema";
import { VariantCreateOrConnectWithoutProductInputObjectSchema } from "./VariantCreateOrConnectWithoutProductInput.schema";
import { VariantUpsertWithWhereUniqueWithoutProductInputObjectSchema } from "./VariantUpsertWithWhereUniqueWithoutProductInput.schema";
import { VariantCreateManyProductInputEnvelopeObjectSchema } from "./VariantCreateManyProductInputEnvelope.schema";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";
import { VariantUpdateWithWhereUniqueWithoutProductInputObjectSchema } from "./VariantUpdateWithWhereUniqueWithoutProductInput.schema";
import { VariantUpdateManyWithWhereWithoutProductInputObjectSchema } from "./VariantUpdateManyWithWhereWithoutProductInput.schema";
import { VariantScalarWhereInputObjectSchema } from "./VariantScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantUpdateManyWithoutProductNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VariantCreateWithoutProductInputObjectSchema),
        z.lazy(() => VariantCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => VariantUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => VariantUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VariantCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => VariantCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => VariantUpsertWithWhereUniqueWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => VariantUpsertWithWhereUniqueWithoutProductInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => VariantCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => VariantWhereUniqueInputObjectSchema),
        z.lazy(() => VariantWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VariantWhereUniqueInputObjectSchema),
        z.lazy(() => VariantWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VariantWhereUniqueInputObjectSchema),
        z.lazy(() => VariantWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VariantWhereUniqueInputObjectSchema),
        z.lazy(() => VariantWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => VariantUpdateWithWhereUniqueWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => VariantUpdateWithWhereUniqueWithoutProductInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VariantUpdateManyWithWhereWithoutProductInputObjectSchema),
        z
          .lazy(() => VariantUpdateManyWithWhereWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VariantScalarWhereInputObjectSchema),
        z.lazy(() => VariantScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VariantUpdateManyWithoutProductNestedInputObjectSchema = Schema;
