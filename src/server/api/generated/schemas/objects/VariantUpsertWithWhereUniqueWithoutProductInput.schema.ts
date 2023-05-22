import { z } from "zod";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";
import { VariantUpdateWithoutProductInputObjectSchema } from "./VariantUpdateWithoutProductInput.schema";
import { VariantUncheckedUpdateWithoutProductInputObjectSchema } from "./VariantUncheckedUpdateWithoutProductInput.schema";
import { VariantCreateWithoutProductInputObjectSchema } from "./VariantCreateWithoutProductInput.schema";
import { VariantUncheckedCreateWithoutProductInputObjectSchema } from "./VariantUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VariantUpdateWithoutProductInputObjectSchema),
        z.lazy(() => VariantUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => VariantCreateWithoutProductInputObjectSchema),
        z.lazy(() => VariantUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const VariantUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
