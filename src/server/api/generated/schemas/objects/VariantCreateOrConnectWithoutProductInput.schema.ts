import { z } from "zod";
import { VariantWhereUniqueInputObjectSchema } from "./VariantWhereUniqueInput.schema";
import { VariantCreateWithoutProductInputObjectSchema } from "./VariantCreateWithoutProductInput.schema";
import { VariantUncheckedCreateWithoutProductInputObjectSchema } from "./VariantUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => VariantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VariantCreateWithoutProductInputObjectSchema),
      z.lazy(() => VariantUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const VariantCreateOrConnectWithoutProductInputObjectSchema = Schema;
