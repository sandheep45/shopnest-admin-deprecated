import { z } from "zod";
import { CustomerReviewWhereInputObjectSchema } from "./objects/CustomerReviewWhereInput.schema";

export const CustomerReviewDeleteManySchema = z.object({
  where: CustomerReviewWhereInputObjectSchema.optional(),
});
