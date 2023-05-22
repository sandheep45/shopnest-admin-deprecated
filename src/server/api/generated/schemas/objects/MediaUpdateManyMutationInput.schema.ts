import { z } from "zod";
import { ImageListUpdateEnvelopeInputObjectSchema } from "./ImageListUpdateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MediaUpdateManyMutationInput> = z
  .object({
    image: z
      .union([
        z.lazy(() => ImageListUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MediaUpdateManyMutationInputObjectSchema = Schema;
