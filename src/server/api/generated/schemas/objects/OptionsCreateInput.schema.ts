import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsCreateInput> = z
  .object({
    name: z.string(),
    values: z.string(),
  })
  .strict();

export const OptionsCreateInputObjectSchema = Schema;
