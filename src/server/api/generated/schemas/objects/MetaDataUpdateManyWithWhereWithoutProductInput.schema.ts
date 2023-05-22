import { z } from "zod";
import { MetaDataScalarWhereInputObjectSchema } from "./MetaDataScalarWhereInput.schema";
import { MetaDataUpdateManyMutationInputObjectSchema } from "./MetaDataUpdateManyMutationInput.schema";
import { MetaDataUncheckedUpdateManyWithoutMetaDataInputObjectSchema } from "./MetaDataUncheckedUpdateManyWithoutMetaDataInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.MetaDataUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MetaDataScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MetaDataUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => MetaDataUncheckedUpdateManyWithoutMetaDataInputObjectSchema
        ),
      ]),
    })
    .strict();

export const MetaDataUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
