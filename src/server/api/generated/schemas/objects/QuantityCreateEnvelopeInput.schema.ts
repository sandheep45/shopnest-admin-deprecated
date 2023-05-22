import { z } from "zod";
import { QuantityCreateInputObjectSchema } from "./QuantityCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuantityCreateEnvelopeInput> = z
  .object({
    set: z.lazy(() => QuantityCreateInputObjectSchema).optional(),
  })
  .strict();

export const QuantityCreateEnvelopeInputObjectSchema = Schema;
