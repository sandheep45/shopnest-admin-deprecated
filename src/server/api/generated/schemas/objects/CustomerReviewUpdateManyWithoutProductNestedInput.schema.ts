import { z } from "zod";
import { CustomerReviewCreateWithoutProductInputObjectSchema } from "./CustomerReviewCreateWithoutProductInput.schema";
import { CustomerReviewUncheckedCreateWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutProductInput.schema";
import { CustomerReviewCreateOrConnectWithoutProductInputObjectSchema } from "./CustomerReviewCreateOrConnectWithoutProductInput.schema";
import { CustomerReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema } from "./CustomerReviewUpsertWithWhereUniqueWithoutProductInput.schema";
import { CustomerReviewCreateManyProductInputEnvelopeObjectSchema } from "./CustomerReviewCreateManyProductInputEnvelope.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema } from "./CustomerReviewUpdateWithWhereUniqueWithoutProductInput.schema";
import { CustomerReviewUpdateManyWithWhereWithoutProductInputObjectSchema } from "./CustomerReviewUpdateManyWithWhereWithoutProductInput.schema";
import { CustomerReviewScalarWhereInputObjectSchema } from "./CustomerReviewScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CustomerReviewCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => CustomerReviewCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => CustomerReviewUncheckedCreateWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () => CustomerReviewUncheckedCreateWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CustomerReviewCreateOrConnectWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () => CustomerReviewCreateOrConnectWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CustomerReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CustomerReviewCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              CustomerReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              CustomerReviewUpdateManyWithWhereWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUpdateManyWithWhereWithoutProductInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CustomerReviewScalarWhereInputObjectSchema),
          z.lazy(() => CustomerReviewScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CustomerReviewUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
