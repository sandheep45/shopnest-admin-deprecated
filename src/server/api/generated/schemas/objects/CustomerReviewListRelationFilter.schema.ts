import { z } from "zod";
import { CustomerReviewWhereInputObjectSchema } from "./CustomerReviewWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerReviewListRelationFilter> = z
  .object({
    every: z.lazy(() => CustomerReviewWhereInputObjectSchema).optional(),
    some: z.lazy(() => CustomerReviewWhereInputObjectSchema).optional(),
    none: z.lazy(() => CustomerReviewWhereInputObjectSchema).optional(),
  })
  .strict();

export const CustomerReviewListRelationFilterObjectSchema = Schema;
