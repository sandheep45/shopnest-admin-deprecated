import { z } from "zod";
import { VariantOptionCreateManyProductInputObjectSchema } from "./VariantOptionCreateManyProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VariantOptionCreateManyProductInputObjectSchema),
      z.lazy(() => VariantOptionCreateManyProductInputObjectSchema).array(),
    ]),
  })
  .strict();

export const VariantOptionCreateManyProductInputEnvelopeObjectSchema = Schema;
