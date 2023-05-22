import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { ImageCompositeListFilterObjectSchema } from "./ImageCompositeListFilter.schema";
import { ImageObjectEqualityInputObjectSchema } from "./ImageObjectEqualityInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MediaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MediaWhereInputObjectSchema),
        z.lazy(() => MediaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MediaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MediaWhereInputObjectSchema),
        z.lazy(() => MediaWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([
        z.lazy(() => ImageCompositeListFilterObjectSchema),
        z.lazy(() => ImageObjectEqualityInputObjectSchema).array(),
        z.lazy(() => ImageObjectEqualityInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MediaWhereInputObjectSchema = Schema;
