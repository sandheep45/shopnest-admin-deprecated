import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuantityCreateInput> = z
  .object({
    onSelf: z.number(),
    inWareHouse: z.number(),
  })
  .strict();

export const QuantityCreateInputObjectSchema = Schema;
