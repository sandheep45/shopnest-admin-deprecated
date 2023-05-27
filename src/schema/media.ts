import * as z from "zod";
import { type CompleteImage, RelatedImageModel } from "./index";

export const MediaModel = z.object({
  id: z.string(),
});

export interface CompleteMedia extends z.infer<typeof MediaModel> {
  image: CompleteImage[];
}

/**
 * RelatedMediaModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMediaModel: z.ZodSchema<CompleteMedia> = z.lazy(() =>
  MediaModel.extend({
    image: RelatedImageModel.array(),
  })
);
