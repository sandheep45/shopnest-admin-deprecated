import { z } from "zod";
import { MetaDataWhereInputObjectSchema } from "./MetaDataWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataListRelationFilter> = z
  .object({
    every: z.lazy(() => MetaDataWhereInputObjectSchema).optional(),
    some: z.lazy(() => MetaDataWhereInputObjectSchema).optional(),
    none: z.lazy(() => MetaDataWhereInputObjectSchema).optional(),
  })
  .strict();

export const MetaDataListRelationFilterObjectSchema = Schema;
