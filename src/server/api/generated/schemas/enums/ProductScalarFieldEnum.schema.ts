import { z } from "zod";

export const ProductScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "description",
  "tags",
  "taxPercent",
  "status",
  "createdAt",
  "updatedAt",
  "categoryId",
]);
