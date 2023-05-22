import { z } from "zod";
import { CustomerReviewCreateManyProductInputObjectSchema } from "./CustomerReviewCreateManyProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CustomerReviewCreateManyProductInputObjectSchema),
      z.lazy(() => CustomerReviewCreateManyProductInputObjectSchema).array(),
    ]),
  })
  .strict();

export const CustomerReviewCreateManyProductInputEnvelopeObjectSchema = Schema;
