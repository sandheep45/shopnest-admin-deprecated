import { z } from "zod";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryCreateWithoutMetaDataInputObjectSchema } from "./CategoryCreateWithoutMetaDataInput.schema";
import { CategoryUncheckedCreateWithoutMetaDataInputObjectSchema } from "./CategoryUncheckedCreateWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutMetaDataInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutMetaDataInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutMetaDataInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutMetaDataInputObjectSchema = Schema;
