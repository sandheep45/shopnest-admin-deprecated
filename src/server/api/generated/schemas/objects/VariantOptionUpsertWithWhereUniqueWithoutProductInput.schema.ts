import { z } from "zod";
import { VariantOptionWhereUniqueInputObjectSchema } from "./VariantOptionWhereUniqueInput.schema";
import { VariantOptionUpdateWithoutProductInputObjectSchema } from "./VariantOptionUpdateWithoutProductInput.schema";
import { VariantOptionUncheckedUpdateWithoutProductInputObjectSchema } from "./VariantOptionUncheckedUpdateWithoutProductInput.schema";
import { VariantOptionCreateWithoutProductInputObjectSchema } from "./VariantOptionCreateWithoutProductInput.schema";
import { VariantOptionUncheckedCreateWithoutProductInputObjectSchema } from "./VariantOptionUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VariantOptionUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => VariantOptionUncheckedUpdateWithoutProductInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => VariantOptionCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => VariantOptionUncheckedCreateWithoutProductInputObjectSchema
        ),
      ]),
    })
    .strict();

export const VariantOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
