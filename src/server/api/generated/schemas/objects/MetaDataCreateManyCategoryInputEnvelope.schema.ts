import { z } from "zod";
import { MetaDataCreateManyCategoryInputObjectSchema } from "./MetaDataCreateManyCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MetaDataCreateManyCategoryInputObjectSchema),
      z.lazy(() => MetaDataCreateManyCategoryInputObjectSchema).array(),
    ]),
  })
  .strict();

export const MetaDataCreateManyCategoryInputEnvelopeObjectSchema = Schema;
