import { z } from "zod";
import { StatusSchema } from "../enums/Status.schema";
import { ImageCreateEnvelopeInputObjectSchema } from "./ImageCreateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { ProductCreateNestedManyWithoutCategoryInputObjectSchema } from "./ProductCreateNestedManyWithoutCategoryInput.schema";
import { MetaDataCreateNestedManyWithoutCategoryInputObjectSchema } from "./MetaDataCreateNestedManyWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    status: z.lazy(() => StatusSchema).optional(),
    image: z.union([
      z.lazy(() => ImageCreateEnvelopeInputObjectSchema),
      z.lazy(() => ImageCreateInputObjectSchema),
    ]),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Product: z
      .lazy(() => ProductCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    MetaData: z
      .lazy(() => MetaDataCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
