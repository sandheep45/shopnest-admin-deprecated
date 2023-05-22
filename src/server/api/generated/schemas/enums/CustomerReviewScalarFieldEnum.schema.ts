import { z } from "zod";

export const CustomerReviewScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "rating",
  "comment",
  "createdAt",
  "updatedAt",
  "userId",
  "productId",
]);
