import { z } from "zod";
import { CustomerReviewCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateWithoutCustomerInput.schema";
import { CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutCustomerInput.schema";
import { CustomerReviewCreateOrConnectWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateOrConnectWithoutCustomerInput.schema";
import { CustomerReviewCreateManyCustomerInputEnvelopeObjectSchema } from "./CustomerReviewCreateManyCustomerInputEnvelope.schema";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateNestedManyWithoutCustomerInput> =
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
      createMany: z
        .lazy(() => CustomerReviewCreateManyCustomerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
          z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CustomerReviewCreateNestedManyWithoutCustomerInputObjectSchema =
  Schema;
