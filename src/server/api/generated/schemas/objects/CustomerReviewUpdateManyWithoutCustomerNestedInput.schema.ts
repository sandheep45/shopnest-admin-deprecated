import { z } from "zod";
import { CustomerReviewCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateWithoutCustomerInput.schema";
import { CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutCustomerInput.schema";
import { CustomerReviewCreateOrConnectWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateOrConnectWithoutCustomerInput.schema";
import { CustomerReviewUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from "./CustomerReviewUpsertWithWhereUniqueWithoutCustomerInput.schema";
import { CustomerReviewCreateManyCustomerInputEnvelopeObjectSchema } from "./CustomerReviewCreateManyCustomerInputEnvelope.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from "./CustomerReviewUpdateWithWhereUniqueWithoutCustomerInput.schema";
import { CustomerReviewUpdateManyWithWhereWithoutCustomerInputObjectSchema } from "./CustomerReviewUpdateManyWithWhereWithoutCustomerInput.schema";
import { CustomerReviewScalarWhereInputObjectSchema } from "./CustomerReviewScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpdateManyWithoutCustomerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CustomerReviewCreateWithoutCustomerInputObjectSchema),
          z
            .lazy(() => CustomerReviewCreateWithoutCustomerInputObjectSchema)
            .array(),
          z.lazy(
            () => CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CustomerReviewCreateOrConnectWithoutCustomerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewCreateOrConnectWithoutCustomerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CustomerReviewUpsertWithWhereUniqueWithoutCustomerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUpsertWithWhereUniqueWithoutCustomerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CustomerReviewCreateManyCustomerInputEnvelopeObjectSchema)
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
              CustomerReviewUpdateWithWhereUniqueWithoutCustomerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUpdateWithWhereUniqueWithoutCustomerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              CustomerReviewUpdateManyWithWhereWithoutCustomerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                CustomerReviewUpdateManyWithWhereWithoutCustomerInputObjectSchema
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

export const CustomerReviewUpdateManyWithoutCustomerNestedInputObjectSchema =
  Schema;
