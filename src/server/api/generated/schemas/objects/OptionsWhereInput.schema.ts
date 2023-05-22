import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OptionsWhereInputObjectSchema),
        z.lazy(() => OptionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OptionsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OptionsWhereInputObjectSchema),
        z.lazy(() => OptionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    values: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const OptionsWhereInputObjectSchema = Schema;
