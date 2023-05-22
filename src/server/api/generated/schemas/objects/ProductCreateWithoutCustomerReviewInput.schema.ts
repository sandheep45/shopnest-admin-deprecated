import { z } from "zod";
import { ImageCreateEnvelopeInputObjectSchema } from "./ImageCreateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { StatusSchema } from "../enums/Status.schema";
import { VariantCreateNestedManyWithoutProductInputObjectSchema } from "./VariantCreateNestedManyWithoutProductInput.schema";
import { VariantOptionCreateNestedManyWithoutProductInputObjectSchema } from "./VariantOptionCreateNestedManyWithoutProductInput.schema";
import { MetaDataCreateNestedManyWithoutProductInputObjectSchema } from "./MetaDataCreateNestedManyWithoutProductInput.schema";
import { CategoryCreateNestedOneWithoutProductInputObjectSchema } from "./CategoryCreateNestedOneWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductCreateWithoutCustomerReviewInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    image: z.union([
      z.lazy(() => ImageCreateEnvelopeInputObjectSchema),
      z.lazy(() => ImageCreateInputObjectSchema),
    ]),
    description: z.string(),
    tags: z.string(),
    taxPercent: z.number(),
    status: z.lazy(() => StatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Variant: z
      .lazy(() => VariantCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    option: z
      .lazy(() => VariantOptionCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    MetaData: z
      .lazy(() => MetaDataCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    Category: z.lazy(
      () => CategoryCreateNestedOneWithoutProductInputObjectSchema
    ),
  })
  .strict();

export const ProductCreateWithoutCustomerReviewInputObjectSchema = Schema;
