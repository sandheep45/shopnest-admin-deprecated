import { z } from "zod";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ImageCreateEnvelopeInput> = z
  .object({
    set: z.lazy(() => ImageCreateInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateEnvelopeInputObjectSchema = Schema;
