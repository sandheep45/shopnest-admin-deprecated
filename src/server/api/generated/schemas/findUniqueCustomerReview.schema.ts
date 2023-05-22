import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./objects/CustomerReviewWhereUniqueInput.schema";

export const CustomerReviewFindUniqueSchema = z.object({
  where: CustomerReviewWhereUniqueInputObjectSchema,
});
