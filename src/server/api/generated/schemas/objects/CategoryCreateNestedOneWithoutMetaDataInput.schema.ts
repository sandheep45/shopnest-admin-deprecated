import { z } from "zod";
import { CategoryCreateWithoutMetaDataInputObjectSchema } from "./CategoryCreateWithoutMetaDataInput.schema";
import { CategoryUncheckedCreateWithoutMetaDataInputObjectSchema } from "./CategoryUncheckedCreateWithoutMetaDataInput.schema";
import { CategoryCreateOrConnectWithoutMetaDataInputObjectSchema } from "./CategoryCreateOrConnectWithoutMetaDataInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutMetaDataInput> = z
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
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateNestedOneWithoutMetaDataInputObjectSchema = Schema;
