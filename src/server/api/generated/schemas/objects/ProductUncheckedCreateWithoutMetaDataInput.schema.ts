import { z } from "zod";
import { ImageCreateEnvelopeInputObjectSchema } from "./ImageCreateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { StatusSchema } from "../enums/Status.schema";
import { VariantUncheckedCreateNestedManyWithoutProductInputObjectSchema } from "./VariantUncheckedCreateNestedManyWithoutProductInput.schema";
import { VariantOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from "./VariantOptionUncheckedCreateNestedManyWithoutProductInput.schema";
import { CustomerReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema } from "./CustomerReviewUncheckedCreateNestedManyWithoutProductInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutMetaDataInput> = z
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
    categoryId: z.string(),
    Variant: z
      .lazy(
        () => VariantUncheckedCreateNestedManyWithoutProductInputObjectSchema
      )
      .optional(),
    option: z
      .lazy(
        () =>
          VariantOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema
      )
      .optional(),
    CustomerReview: z
      .lazy(
        () =>
          CustomerReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateWithoutMetaDataInputObjectSchema = Schema;
