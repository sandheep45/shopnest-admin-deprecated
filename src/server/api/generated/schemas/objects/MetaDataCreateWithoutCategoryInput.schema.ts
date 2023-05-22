import { z } from "zod";
import { ProductCreateNestedOneWithoutMetaDataInputObjectSchema } from "./ProductCreateNestedOneWithoutMetaDataInput.schema";
import { VariantCreateNestedOneWithoutMetaDataInputObjectSchema } from "./VariantCreateNestedOneWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    Product: z
      .lazy(() => ProductCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
    Variant: z
      .lazy(() => VariantCreateNestedOneWithoutMetaDataInputObjectSchema)
      .optional(),
  })
  .strict();

export const MetaDataCreateWithoutCategoryInputObjectSchema = Schema;
