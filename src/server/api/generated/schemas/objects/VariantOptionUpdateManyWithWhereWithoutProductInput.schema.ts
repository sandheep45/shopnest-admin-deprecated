import { z } from "zod";
import { VariantOptionScalarWhereInputObjectSchema } from "./VariantOptionScalarWhereInput.schema";
import { VariantOptionUpdateManyMutationInputObjectSchema } from "./VariantOptionUpdateManyMutationInput.schema";
import { VariantOptionUncheckedUpdateManyWithoutOptionInputObjectSchema } from "./VariantOptionUncheckedUpdateManyWithoutOptionInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantOptionUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VariantOptionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VariantOptionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => VariantOptionUncheckedUpdateManyWithoutOptionInputObjectSchema
        ),
      ]),
    })
    .strict();

export const VariantOptionUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
