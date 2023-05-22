import { z } from "zod";

export const QuantityType = z.object({
  onSelf: z.number(),
  inWareHouse: z.number(),
});

export interface CompleteQuantity extends z.infer<typeof QuantityType> {}

/**
 * RelatedQuantityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */

export const RelatedQuantityModel: z.ZodSchema<CompleteQuantity> = z.lazy(() =>
  QuantityType.extend({})
);
