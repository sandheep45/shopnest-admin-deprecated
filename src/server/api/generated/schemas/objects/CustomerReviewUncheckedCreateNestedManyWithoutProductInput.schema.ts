import { z } from "zod";
import { CustomerReviewCreateWithoutProductInputObjectSchema } from "./CustomerReviewCreateWithoutProductInput.schema";
import { CustomerReviewUncheckedCreateWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutProductInput.schema";
import { CustomerReviewCreateOrConnectWithoutProductInputObjectSchema } from "./CustomerReviewCreateOrConnectWithoutProductInput.schema";
import { CustomerReviewCreateManyProductInputEnvelopeObjectSchema } from "./CustomerReviewCreateManyProductInputEnvelope.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUncheckedCreateNestedManyWithoutProductInput> =
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
      createMany: z
        .lazy(() => CustomerReviewCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CustomerReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
