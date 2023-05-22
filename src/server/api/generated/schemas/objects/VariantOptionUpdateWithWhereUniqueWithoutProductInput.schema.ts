import { z } from "zod";
import { VariantOptionWhereUniqueInputObjectSchema } from "./VariantOptionWhereUniqueInput.schema";
import { VariantOptionUpdateWithoutProductInputObjectSchema } from "./VariantOptionUpdateWithoutProductInput.schema";
import { VariantOptionUncheckedUpdateWithoutProductInputObjectSchema } from "./VariantOptionUncheckedUpdateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VariantOptionUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => VariantOptionUncheckedUpdateWithoutProductInputObjectSchema
        ),
      ]),
    })
    .strict();

export const VariantOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
