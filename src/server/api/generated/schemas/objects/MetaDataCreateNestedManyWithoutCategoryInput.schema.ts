import { z } from "zod";
import { MetaDataCreateWithoutCategoryInputObjectSchema } from "./MetaDataCreateWithoutCategoryInput.schema";
import { MetaDataUncheckedCreateWithoutCategoryInputObjectSchema } from "./MetaDataUncheckedCreateWithoutCategoryInput.schema";
import { MetaDataCreateOrConnectWithoutCategoryInputObjectSchema } from "./MetaDataCreateOrConnectWithoutCategoryInput.schema";
import { MetaDataCreateManyCategoryInputEnvelopeObjectSchema } from "./MetaDataCreateManyCategoryInputEnvelope.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateNestedManyWithoutCategoryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MetaDataCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => MetaDataCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => MetaDataUncheckedCreateWithoutCategoryInputObjectSchema),
        z
          .lazy(() => MetaDataUncheckedCreateWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MetaDataCreateOrConnectWithoutCategoryInputObjectSchema),
        z
          .lazy(() => MetaDataCreateOrConnectWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MetaDataCreateManyCategoryInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
        z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MetaDataCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
