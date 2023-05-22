import { z } from "zod";
import { CustomerReviewCreateManyCustomerInputObjectSchema } from "./CustomerReviewCreateManyCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateManyCustomerInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CustomerReviewCreateManyCustomerInputObjectSchema),
        z.lazy(() => CustomerReviewCreateManyCustomerInputObjectSchema).array(),
      ]),
    })
    .strict();

export const CustomerReviewCreateManyCustomerInputEnvelopeObjectSchema = Schema;
