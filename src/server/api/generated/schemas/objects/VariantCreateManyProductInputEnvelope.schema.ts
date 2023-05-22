import { z } from "zod";
import { VariantCreateManyProductInputObjectSchema } from "./VariantCreateManyProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VariantCreateManyProductInputObjectSchema),
      z.lazy(() => VariantCreateManyProductInputObjectSchema).array(),
    ]),
  })
  .strict();

export const VariantCreateManyProductInputEnvelopeObjectSchema = Schema;
