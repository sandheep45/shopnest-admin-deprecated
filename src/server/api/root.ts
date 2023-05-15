import { createTRPCRouter } from "@src/server/api/trpc";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";
import { customerReviewRouter } from "./routers/customerReview";
import { variantRouter } from "./routers/variant";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  product: productRouter,
  category: categoryRouter,
  customerReview: customerReviewRouter,
  variants: variantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
