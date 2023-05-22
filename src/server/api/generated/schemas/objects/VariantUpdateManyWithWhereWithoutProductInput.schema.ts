import { z } from "zod";
import { VariantScalarWhereInputObjectSchema } from "./VariantScalarWhereInput.schema";
import { VariantUpdateManyMutationInputObjectSchema } from "./VariantUpdateManyMutationInput.schema";
import { VariantUncheckedUpdateManyWithoutVariantInputObjectSchema } from "./VariantUncheckedUpdateManyWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VariantUpdateManyMutationInputObjectSchema),
        z.lazy(() => VariantUncheckedUpdateManyWithoutVariantInputObjectSchema),
      ]),
    })
    .strict();

export const VariantUpdateManyWithWhereWithoutProductInputObjectSchema = Schema;
