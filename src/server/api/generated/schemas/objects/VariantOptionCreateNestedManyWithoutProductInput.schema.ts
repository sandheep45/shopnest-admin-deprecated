import { z } from "zod";
import { VariantOptionCreateWithoutProductInputObjectSchema } from "./VariantOptionCreateWithoutProductInput.schema";
import { VariantOptionUncheckedCreateWithoutProductInputObjectSchema } from "./VariantOptionUncheckedCreateWithoutProductInput.schema";
import { VariantOptionCreateOrConnectWithoutProductInputObjectSchema } from "./VariantOptionCreateOrConnectWithoutProductInput.schema";
import { VariantOptionCreateManyProductInputEnvelopeObjectSchema } from "./VariantOptionCreateManyProductInputEnvelope.schema";
import { VariantOptionWhereUniqueInputObjectSchema } from "./VariantOptionWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionCreateNestedManyWithoutProductInput> =
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
      createMany: z
        .lazy(() => VariantOptionCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
          z.lazy(() => VariantOptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VariantOptionCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
