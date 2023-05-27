import { z } from "zod";

export const OptionType = z.object({
  name: z.string(),
  values: z.string(),
});

export interface CompleteOptions extends z.infer<typeof OptionType> {}

/**
 * RelatedOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */

export const RelatedOptionsModel: z.ZodSchema<CompleteOptions> = z.lazy(() =>
  OptionType.extend({})
);
