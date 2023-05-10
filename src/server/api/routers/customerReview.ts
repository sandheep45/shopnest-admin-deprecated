import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@src/server/api/trpc";

export const customerReviewRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSingleReview: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.customerReview.findMany({
        where: {
          productId: input.productId,
        },
        include: {
          customer: true,
        },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
