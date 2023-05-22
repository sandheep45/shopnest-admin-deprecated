import { z } from "zod";

export const VariantScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "description",
  "price",
  "sku",
  "taxPercent",
  "barcode",
  "height",
  "width",
  "length",
  "weight",
  "createdAt",
  "updatedAt",
  "productId",
]);
