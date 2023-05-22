import { z } from "zod";
import { OptionsWhereInputObjectSchema } from "./OptionsWhereInput.schema";
import { OptionsUpdateInputObjectSchema } from "./OptionsUpdateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.OptionsUpdateManyInput> = z
  .object({
    where: z.lazy(() => OptionsWhereInputObjectSchema),
    data: z.lazy(() => OptionsUpdateInputObjectSchema),
  })
  .strict();

export const OptionsUpdateManyInputObjectSchema = Schema;
