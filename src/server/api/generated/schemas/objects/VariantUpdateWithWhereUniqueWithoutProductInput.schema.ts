import { z } from "zod";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";
import { VariantUpdateWithoutProductInputObjectSchema } from "./VariantUpdateWithoutProductInput.schema";
import { VariantUncheckedUpdateWithoutProductInputObjectSchema } from "./VariantUncheckedUpdateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VariantUpdateWithoutProductInputObjectSchema),
        z.lazy(() => VariantUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const VariantUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
