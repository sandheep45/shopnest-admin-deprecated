import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./objects/MetaDataWhereUniqueInput.schema";

export const MetaDataFindUniqueSchema = z.object({
  where: MetaDataWhereUniqueInputObjectSchema,
});
