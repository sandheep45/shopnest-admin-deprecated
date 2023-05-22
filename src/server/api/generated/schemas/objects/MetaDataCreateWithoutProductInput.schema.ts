import { z } from "zod";
import { CategoryCreateNestedOneWithoutMetaDataInputObjectSchema } from "./CategoryCreateNestedOneWithoutMetaDataInput.schema";
import { VariantCreateNestedOneWithoutMetaDataInputObjectSchema } from "./VariantCreateNestedOneWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    Category: z
      .lazy(() => CategoryCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
    Variant: z
      .lazy(() => VariantCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataCreateWithoutProductInputObjectSchema = Schema;
