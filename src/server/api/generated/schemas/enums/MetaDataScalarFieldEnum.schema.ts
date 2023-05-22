import { z } from "zod";

export const MetaDataScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "keywords",
  "categoryId",
  "productId",
  "variantId",
]);
