import { z } from "zod";

export const VariantOptionScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "values",
  "productId",
]);
