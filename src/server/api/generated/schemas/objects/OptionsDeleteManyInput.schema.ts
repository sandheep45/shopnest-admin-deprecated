import { z } from "zod";
import { OptionsWhereInputObjectSchema } from "./OptionsWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsDeleteManyInput> = z
  .object({
    where: z.lazy(() => OptionsWhereInputObjectSchema),
  })
  .strict();

export const OptionsDeleteManyInputObjectSchema = Schema;
