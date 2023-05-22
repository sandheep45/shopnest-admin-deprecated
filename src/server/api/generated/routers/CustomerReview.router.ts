import { t, protectedProcedure } from "./helpers/createRouter";
import { CustomerReviewAggregateSchema } from "../schemas/aggregateCustomerReview.schema";
import { CustomerReviewCreateManySchema } from "../schemas/createManyCustomerReview.schema";
import { CustomerReviewCreateOneSchema } from "../schemas/createOneCustomerReview.schema";
import { CustomerReviewDeleteManySchema } from "../schemas/deleteManyCustomerReview.schema";
import { CustomerReviewDeleteOneSchema } from "../schemas/deleteOneCustomerReview.schema";
import { CustomerReviewFindFirstSchema } from "../schemas/findFirstCustomerReview.schema";
import { CustomerReviewFindManySchema } from "../schemas/findManyCustomerReview.schema";
import { CustomerReviewFindUniqueSchema } from "../schemas/findUniqueCustomerReview.schema";
import { CustomerReviewGroupBySchema } from "../schemas/groupByCustomerReview.schema";
import { CustomerReviewUpdateManySchema } from "../schemas/updateManyCustomerReview.schema";
import { CustomerReviewUpdateOneSchema } from "../schemas/updateOneCustomerReview.schema";
import { CustomerReviewUpsertSchema } from "../schemas/upsertOneCustomerReview.schema";

export const customerreviewsRouter = t.router({
  aggregateCustomerReview: protectedProcedure
    .input(CustomerReviewAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCustomerReview = await ctx.prisma.customerReview.aggregate(
        input
      );
      return aggregateCustomerReview;
    }),
  createManyCustomerReview: protectedProcedure
    .input(CustomerReviewCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyCustomerReview =
        await ctx.prisma.customerReview.createMany(input);
      return createManyCustomerReview;
    }),
  createOneCustomerReview: protectedProcedure
    .input(CustomerReviewCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCustomerReview = await ctx.prisma.customerReview.create(
        input
      );
      return createOneCustomerReview;
    }),
  deleteManyCustomerReview: protectedProcedure
    .input(CustomerReviewDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyCustomerReview =
        await ctx.prisma.customerReview.deleteMany(input);
      return deleteManyCustomerReview;
    }),
  deleteOneCustomerReview: protectedProcedure
    .input(CustomerReviewDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCustomerReview = await ctx.prisma.customerReview.delete(
        input
      );
      return deleteOneCustomerReview;
    }),
  findFirstCustomerReview: protectedProcedure
    .input(CustomerReviewFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCustomerReview = await ctx.prisma.customerReview.findFirst(
        input
      );
      return findFirstCustomerReview;
    }),
  findFirstCustomerReviewOrThrow: protectedProcedure
    .input(CustomerReviewFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCustomerReviewOrThrow =
        await ctx.prisma.customerReview.findFirstOrThrow(input);
      return findFirstCustomerReviewOrThrow;
    }),
  findManyCustomerReview: protectedProcedure
    .input(CustomerReviewFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyCustomerReview = await ctx.prisma.customerReview.findMany(
        input
      );
      return findManyCustomerReview;
    }),
  findUniqueCustomerReview: protectedProcedure
    .input(CustomerReviewFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCustomerReview =
        await ctx.prisma.customerReview.findUnique(input);
      return findUniqueCustomerReview;
    }),
  findUniqueCustomerReviewOrThrow: protectedProcedure
    .input(CustomerReviewFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCustomerReviewOrThrow =
        await ctx.prisma.customerReview.findUniqueOrThrow(input);
      return findUniqueCustomerReviewOrThrow;
    }),
  groupByCustomerReview: protectedProcedure
    .input(CustomerReviewGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByCustomerReview = await ctx.prisma.customerReview.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByCustomerReview;
    }),
  updateManyCustomerReview: protectedProcedure
    .input(CustomerReviewUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyCustomerReview =
        await ctx.prisma.customerReview.updateMany(input);
      return updateManyCustomerReview;
    }),
  updateOneCustomerReview: protectedProcedure
    .input(CustomerReviewUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCustomerReview = await ctx.prisma.customerReview.update(
        input
      );
      return updateOneCustomerReview;
    }),
  upsertOneCustomerReview: protectedProcedure
    .input(CustomerReviewUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneCustomerReview = await ctx.prisma.customerReview.upsert(
        input
      );
      return upsertOneCustomerReview;
    }),
});
