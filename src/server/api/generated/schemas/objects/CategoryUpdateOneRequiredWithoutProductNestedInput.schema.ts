import { z } from "zod";
import { CategoryCreateWithoutProductInputObjectSchema } from "./CategoryCreateWithoutProductInput.schema";
import { CategoryUncheckedCreateWithoutProductInputObjectSchema } from "./CategoryUncheckedCreateWithoutProductInput.schema";
import { CategoryCreateOrConnectWithoutProductInputObjectSchema } from "./CategoryCreateOrConnectWithoutProductInput.schema";
import { CategoryUpsertWithoutProductInputObjectSchema } from "./CategoryUpsertWithoutProductInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryUpdateWithoutProductInputObjectSchema } from "./CategoryUpdateWithoutProductInput.schema";
import { CategoryUncheckedUpdateWithoutProductInputObjectSchema } from "./CategoryUncheckedUpdateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutProductInputObjectSchema),
          z.lazy(() => CategoryUncheckedCreateWithoutProductInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CategoryCreateOrConnectWithoutProductInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CategoryUpsertWithoutProductInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutProductInputObjectSchema),
          z.lazy(() => CategoryUncheckedUpdateWithoutProductInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateOneRequiredWithoutProductNestedInputObjectSchema =
  Schema;
