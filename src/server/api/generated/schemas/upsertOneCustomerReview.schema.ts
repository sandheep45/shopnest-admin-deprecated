import { z } from "zod";
import { CustomerReviewWhereUniqueInputObjectSchema } from "./objects/CustomerReviewWhereUniqueInput.schema";
import { CustomerReviewCreateInputObjectSchema } from "./objects/CustomerReviewCreateInput.schema";
import { CustomerReviewUncheckedCreateInputObjectSchema } from "./objects/CustomerReviewUncheckedCreateInput.schema";
import { CustomerReviewUpdateInputObjectSchema } from "./objects/CustomerReviewUpdateInput.schema";
import { CustomerReviewUncheckedUpdateInputObjectSchema } from "./objects/CustomerReviewUncheckedUpdateInput.schema";

export const CustomerReviewUpsertSchema = z.object({
  where: CustomerReviewWhereUniqueInputObjectSchema,
  create: z.union([
    CustomerReviewCreateInputObjectSchema,
    CustomerReviewUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CustomerReviewUpdateInputObjectSchema,
    CustomerReviewUncheckedUpdateInputObjectSchema,
  ]),
});
