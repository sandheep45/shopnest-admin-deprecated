import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./objects/CustomerReviewWhereUniqueInput.schema";

export const CustomerReviewDeleteOneSchema = z.object({
  where: CustomerReviewWhereUniqueInputObjectSchema,
});
