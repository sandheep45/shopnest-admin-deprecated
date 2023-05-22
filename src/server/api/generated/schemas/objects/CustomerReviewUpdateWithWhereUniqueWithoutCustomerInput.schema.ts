import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewUpdateWithoutCustomerInputObjectSchema } from "./CustomerReviewUpdateWithoutCustomerInput.schema";
import { CustomerReviewUncheckedUpdateWithoutCustomerInputObjectSchema } from "./CustomerReviewUncheckedUpdateWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpdateWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CustomerReviewUpdateWithoutCustomerInputObjectSchema),
        z.lazy(
          () => CustomerReviewUncheckedUpdateWithoutCustomerInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewUpdateWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
