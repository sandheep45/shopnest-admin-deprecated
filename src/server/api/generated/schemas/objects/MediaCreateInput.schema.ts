import { z } from "zod";
import { ImageListCreateEnvelopeInputObjectSchema } from "./ImageListCreateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MediaCreateInput> = z
  .object({
    id: z.string().optional(),
    image: z
      .union([
        z.lazy(() => ImageListCreateEnvelopeInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MediaCreateInputObjectSchema = Schema;
