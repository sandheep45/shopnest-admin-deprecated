import { z } from "zod";
import { VariantOptionWhereUniqueInputObjectSchema } from "./VariantOptionWhereUniqueInput.schema";
import { VariantOptionCreateWithoutProductInputObjectSchema } from "./VariantOptionCreateWithoutProductInput.schema";
import { VariantOptionUncheckedCreateWithoutProductInputObjectSchema } from "./VariantOptionUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantOptionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VariantOptionCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => VariantOptionUncheckedCreateWithoutProductInputObjectSchema
        ),
      ]),
    })
    .strict();

export const VariantOptionCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
