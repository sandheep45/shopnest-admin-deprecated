import { z } from "zod";
import { CustomerReviewScalarWhereInputObjectSchema } from "./CustomerReviewScalarWhereInput.schema";
import { CustomerReviewUpdateManyMutationInputObjectSchema } from "./CustomerReviewUpdateManyMutationInput.schema";
import { CustomerReviewUncheckedUpdateManyWithoutCustomerReviewInputObjectSchema } from "./CustomerReviewUncheckedUpdateManyWithoutCustomerReviewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => CustomerReviewScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => CustomerReviewUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            CustomerReviewUncheckedUpdateManyWithoutCustomerReviewInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerReviewUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
