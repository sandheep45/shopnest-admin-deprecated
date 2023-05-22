import { z } from "zod";
import { VariantCreateWithoutProductInputObjectSchema } from "./VariantCreateWithoutProductInput.schema";
import { VariantUncheckedCreateWithoutProductInputObjectSchema } from "./VariantUncheckedCreateWithoutProductInput.schema";
import { VariantCreateOrConnectWithoutProductInputObjectSchema } from "./VariantCreateOrConnectWithoutProductInput.schema";
import { VariantCreateManyProductInputEnvelopeObjectSchema } from "./VariantCreateManyProductInputEnvelope.schema";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantCreateNestedManyWithoutProductInput> = z
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
    createMany: z
      .lazy(() => VariantCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => VariantWhereUniqueInputObjectSchema),
        z.lazy(() => VariantWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VariantCreateNestedManyWithoutProductInputObjectSchema = Schema;
