import { z } from "zod";
import { MetaDataCreateManyVariantInputObjectSchema } from "./MetaDataCreateManyVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateManyVariantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MetaDataCreateManyVariantInputObjectSchema),
      z.lazy(() => MetaDataCreateManyVariantInputObjectSchema).array(),
    ]),
  })
  .strict();

export const MetaDataCreateManyVariantInputEnvelopeObjectSchema = Schema;
