import { z } from "zod";
import { CategoryCreateWithoutMetaDataInputObjectSchema } from "./CategoryCreateWithoutMetaDataInput.schema";
import { CategoryUncheckedCreateWithoutMetaDataInputObjectSchema } from "./CategoryUncheckedCreateWithoutMetaDataInput.schema";
import { CategoryCreateOrConnectWithoutMetaDataInputObjectSchema } from "./CategoryCreateOrConnectWithoutMetaDataInput.schema";
import { CategoryUpsertWithoutMetaDataInputObjectSchema } from "./CategoryUpsertWithoutMetaDataInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryUpdateWithoutMetaDataInputObjectSchema } from "./CategoryUpdateWithoutMetaDataInput.schema";
import { CategoryUncheckedUpdateWithoutMetaDataInputObjectSchema } from "./CategoryUncheckedUpdateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutMetaDataNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutMetaDataInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutMetaDataInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CategoryCreateOrConnectWithoutMetaDataInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => CategoryUpsertWithoutMetaDataInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CategoryUpdateWithoutMetaDataInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutMetaDataInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CategoryUpdateOneWithoutMetaDataNestedInputObjectSchema = Schema;
