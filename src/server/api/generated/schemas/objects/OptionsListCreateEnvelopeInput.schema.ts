import { z } from "zod";
import { OptionsCreateInputObjectSchema } from "./OptionsCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsListCreateEnvelopeInput> = z
  .object({
    set: z
      .union([
        z.lazy(() => OptionsCreateInputObjectSchema),
        z.lazy(() => OptionsCreateInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const OptionsListCreateEnvelopeInputObjectSchema = Schema;
