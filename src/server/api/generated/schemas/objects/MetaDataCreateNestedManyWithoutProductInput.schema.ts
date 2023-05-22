import { z } from "zod";
import { MetaDataCreateWithoutProductInputObjectSchema } from "./MetaDataCreateWithoutProductInput.schema";
import { MetaDataUncheckedCreateWithoutProductInputObjectSchema } from "./MetaDataUncheckedCreateWithoutProductInput.schema";
import { MetaDataCreateOrConnectWithoutProductInputObjectSchema } from "./MetaDataCreateOrConnectWithoutProductInput.schema";
import { MetaDataCreateManyProductInputEnvelopeObjectSchema } from "./MetaDataCreateManyProductInputEnvelope.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./MetaDataWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataCreateNestedManyWithoutProductInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MetaDataCreateWithoutProductInputObjectSchema),
        z.lazy(() => MetaDataCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => MetaDataUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => MetaDataUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MetaDataCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => MetaDataCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MetaDataCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MetaDataWhereUniqueInputObjectSchema),
        z.lazy(() => MetaDataWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MetaDataCreateNestedManyWithoutProductInputObjectSchema = Schema;
