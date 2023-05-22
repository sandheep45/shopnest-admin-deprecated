import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateWithoutCustomerInput.schema";
import { CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateOrConnectWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CustomerReviewCreateWithoutCustomerInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewCreateOrConnectWithoutCustomerInputObjectSchema =
  Schema;
