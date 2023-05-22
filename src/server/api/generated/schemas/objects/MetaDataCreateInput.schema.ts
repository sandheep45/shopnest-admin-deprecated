import { z } from "zod";
import { CategoryCreateNestedOneWithoutMetaDataInputObjectSchema } from "./CategoryCreateNestedOneWithoutMetaDataInput.schema";
import { ProductCreateNestedOneWithoutMetaDataInputObjectSchema } from "./ProductCreateNestedOneWithoutMetaDataInput.schema";
import { VariantCreateNestedOneWithoutMetaDataInputObjectSchema } from "./VariantCreateNestedOneWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    Category: z
      .lazy(() => CategoryCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
    Product: z
      .lazy(() => ProductCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
    Variant: z
      .lazy(() => VariantCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataCreateInputObjectSchema = Schema;
