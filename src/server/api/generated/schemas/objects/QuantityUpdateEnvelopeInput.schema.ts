import { z } from "zod";
import { QuantityCreateInputObjectSchema } from "./QuantityCreateInput.schema";
import { QuantityUpdateInputObjectSchema } from "./QuantityUpdateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuantityUpdateEnvelopeInput> = z
  .object({
    set: z.lazy(() => QuantityCreateInputObjectSchema).optional(),
    update: z.lazy(() => QuantityUpdateInputObjectSchema).optional(),
  })
  .strict();

export const QuantityUpdateEnvelopeInputObjectSchema = Schema;
