import { createTRPCRouter } from "@src/server/api/trpc";
import { exampleRouter } from "@src/server/api/routers/example";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  product: productRouter,
  category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
