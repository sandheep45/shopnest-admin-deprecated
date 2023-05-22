import { z } from "zod";

export const ImageType = z.object({
  url: z.string(),
  alt: z.string(),
  height: z.number(),
  width: z.number(),
});

export interface CompleteImage extends z.infer<typeof ImageType> {}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */

export const RelatedImageModel: z.ZodSchema<CompleteImage> = z.lazy(() =>
  ImageType.extend({})
);
