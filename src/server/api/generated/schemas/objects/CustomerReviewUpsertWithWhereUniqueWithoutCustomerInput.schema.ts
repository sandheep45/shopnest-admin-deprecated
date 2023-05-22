import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewUpdateWithoutCustomerInputObjectSchema } from "./CustomerReviewUpdateWithoutCustomerInput.schema";
import { CustomerReviewUncheckedUpdateWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedUpdateWithoutCustomerInput.schema";
import { CustomerReviewCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewCreateWithoutCustomerInput.schema";
import { CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedCreateWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpsertWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CustomerReviewUpdateWithoutCustomerInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedUpdateWithoutCustomerInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => CustomerReviewCreateWithoutCustomerInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedCreateWithoutCustomerInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewUpsertWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
