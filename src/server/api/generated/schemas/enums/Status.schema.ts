import { z } from "zod";

export const StatusSchema = z.enum([
  "PUBLISHED",
  "DRAFT",
  "INACTIVE",
  "SCHEDULED",
]);
