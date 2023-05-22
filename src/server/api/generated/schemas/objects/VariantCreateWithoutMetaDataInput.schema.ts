import { z } from "zod";
import { ImageCreateEnvelopeInputObjectSchema } from "./ImageCreateEnvelopeInput.schema";
import { ImageCreateInputObjectSchema } from "./ImageCreateInput.schema";
import { OptionsListCreateEnvelopeInputObjectSchema } from "./OptionsListCreateEnvelopeInput.schema";
import { OptionsCreateInputObjectSchema } from "./OptionsCreateInput.schema";
import { QuantityCreateEnvelopeInputObjectSchema } from "./QuantityCreateEnvelopeInput.schema";
import { QuantityCreateInputObjectSchema } from "./QuantityCreateInput.schema";
import { ProductCreateNestedOneWithoutVariantInputObjectSchema } from "./ProductCreateNestedOneWithoutVariantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VariantCreateWithoutMetaDataInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    image: z.union([
      z.lazy(() => ImageCreateEnvelopeInputObjectSchema),
      z.lazy(() => ImageCreateInputObjectSchema),
    ]),
    options: z
      .union([
        z.lazy(() => OptionsListCreateEnvelopeInputObjectSchema),
        z.lazy(() => OptionsCreateInputObjectSchema),
        z.lazy(() => OptionsCreateInputObjectSchema).array(),
      ])
      .optional(),
    price: z.number(),
    sku: z.string(),
    taxPercent: z.number(),
    barcode: z.string(),
    height: z.number(),
    width: z.number(),
    length: z.number(),
    weight: z.number(),
    quantity: z.union([
      z.lazy(() => QuantityCreateEnvelopeInputObjectSchema),
      z.lazy(() => QuantityCreateInputObjectSchema),
    ]),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutVariantInputObjectSchema
    ),
  })
  .strict();

export const VariantCreateWithoutMetaDataInputObjectSchema = Schema;
