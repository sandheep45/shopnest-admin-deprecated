import { z } from "zod";
import { OptionsCreateInputObjectSchema } from "./OptionsCreateInput.schema";
import { OptionsUpdateManyInputObjectSchema } from "./OptionsUpdateManyInput.schema";
import { OptionsDeleteManyInputObjectSchema } from "./OptionsDeleteManyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsListUpdateEnvelopeInput> = z
  .object({
    set: z
      .union([
        z.lazy(() => OptionsCreateInputObjectSchema),
        z.lazy(() => OptionsCreateInputObjectSchema).array(),
      ])
      .optional(),
    push: z
      .union([
        z.lazy(() => OptionsCreateInputObjectSchema),
        z.lazy(() => OptionsCreateInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z.lazy(() => OptionsUpdateManyInputObjectSchema).optional(),
    deleteMany: z.lazy(() => OptionsDeleteManyInputObjectSchema).optional(),
  })
  .strict();

export const OptionsListUpdateEnvelopeInputObjectSchema = Schema;
