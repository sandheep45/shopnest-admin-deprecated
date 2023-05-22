import { z } from "zod";
import { CategoryUpdateWithoutProductInputObjectSchema } from "./CategoryUpdateWithoutProductInput.schema";
import { CategoryUncheckedUpdateWithoutProductInputObjectSchema } from "./CategoryUncheckedUpdateWithoutProductInput.schema";
import { CategoryCreateWithoutProductInputObjectSchema } from "./CategoryCreateWithoutProductInput.schema";
import { CategoryUncheckedCreateWithoutProductInputObjectSchema } from "./CategoryUncheckedCreateWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutProductInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutProductInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutProductInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutProductInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutProductInputObjectSchema = Schema;
