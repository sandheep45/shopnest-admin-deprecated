import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ImageCreateInput> = z
  .object({
    url: z.string(),
    alt: z.string(),
    height: z.number(),
    width: z.number(),
  })
  .strict();

export const ImageCreateInputObjectSchema = Schema;
