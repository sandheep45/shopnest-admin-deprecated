import { z } from "zod";
import { CustomerReviewUpdateManyMutationInputObjectSchema } from "./objects/CustomerReviewUpdateManyMutationInput.schema";
import { CustomerReviewWhereInputObjectSchema } from "./objects/CustomerReviewWhereInput.schema";

export const CustomerReviewUpdateManySchema = z.object({
  data: CustomerReviewUpdateManyMutationInputObjectSchema,
  where: CustomerReviewWhereInputObjectSchema.optional(),
});
