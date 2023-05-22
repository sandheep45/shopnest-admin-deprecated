import { z } from "zod";
import { CategoryUpdateWithoutMetaDataInputObjectSchema } from "./CategoryUpdateWithoutMetaDataInput.schema";
import { CategoryUncheckedUpdateWithoutMetaDataInputObjectSchema } from "./CategoryUncheckedUpdateWithoutMetaDataInput.schema";
import { CategoryCreateWithoutMetaDataInputObjectSchema } from "./CategoryCreateWithoutMetaDataInput.schema";
import { CategoryUncheckedCreateWithoutMetaDataInputObjectSchema } from "./CategoryUncheckedCreateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutMetaDataInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutMetaDataInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutMetaDataInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutMetaDataInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutMetaDataInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutMetaDataInputObjectSchema = Schema;
