import { z } from "zod";
import { MetaDataCreateManyProductInputObjectSchema } from "./MetaDataCreateManyProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MetaDataCreateManyProductInputObjectSchema),
      z.lazy(() => MetaDataCreateManyProductInputObjectSchema).array(),
    ]),
  })
  .strict();

export const MetaDataCreateManyProductInputEnvelopeObjectSchema = Schema;
