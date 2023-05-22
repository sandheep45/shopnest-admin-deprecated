import { z } from "zod";
import { ProductCreateManyCategoryInputObjectSchema } from "./ProductCreateManyCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProductCreateManyCategoryInputObjectSchema),
      z.lazy(() => ProductCreateManyCategoryInputObjectSchema).array(),
    ]),
  })
  .strict();

export const ProductCreateManyCategoryInputEnvelopeObjectSchema = Schema;
