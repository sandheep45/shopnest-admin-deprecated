import { t, protectedProcedure } from "./helpers/createRouter";
import { VariantOptionAggregateSchema } from "../schemas/aggregateVariantOption.schema";
import { VariantOptionCreateManySchema } from "../schemas/createManyVariantOption.schema";
import { VariantOptionCreateOneSchema } from "../schemas/createOneVariantOption.schema";
import { VariantOptionDeleteManySchema } from "../schemas/deleteManyVariantOption.schema";
import { VariantOptionDeleteOneSchema } from "../schemas/deleteOneVariantOption.schema";
import { VariantOptionFindFirstSchema } from "../schemas/findFirstVariantOption.schema";
import { VariantOptionFindManySchema } from "../schemas/findManyVariantOption.schema";
import { VariantOptionFindUniqueSchema } from "../schemas/findUniqueVariantOption.schema";
import { VariantOptionGroupBySchema } from "../schemas/groupByVariantOption.schema";
import { VariantOptionUpdateManySchema } from "../schemas/updateManyVariantOption.schema";
import { VariantOptionUpdateOneSchema } from "../schemas/updateOneVariantOption.schema";
import { VariantOptionUpsertSchema } from "../schemas/upsertOneVariantOption.schema";

export const variantoptionsRouter = t.router({
  aggregateVariantOption: protectedProcedure
    .input(VariantOptionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateVariantOption = await ctx.prisma.variantOption.aggregate(
        input
      );
      return aggregateVariantOption;
    }),
  createManyVariantOption: protectedProcedure
    .input(VariantOptionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyVariantOption = await ctx.prisma.variantOption.createMany(
        input
      );
      return createManyVariantOption;
    }),
  createOneVariantOption: protectedProcedure
    .input(VariantOptionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneVariantOption = await ctx.prisma.variantOption.create(
        input
      );
      return createOneVariantOption;
    }),
  deleteManyVariantOption: protectedProcedure
    .input(VariantOptionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyVariantOption = await ctx.prisma.variantOption.deleteMany(
        input
      );
      return deleteManyVariantOption;
    }),
  deleteOneVariantOption: protectedProcedure
    .input(VariantOptionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneVariantOption = await ctx.prisma.variantOption.delete(
        input
      );
      return deleteOneVariantOption;
    }),
  findFirstVariantOption: protectedProcedure
    .input(VariantOptionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVariantOption = await ctx.prisma.variantOption.findFirst(
        input
      );
      return findFirstVariantOption;
    }),
  findFirstVariantOptionOrThrow: protectedProcedure
    .input(VariantOptionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVariantOptionOrThrow =
        await ctx.prisma.variantOption.findFirstOrThrow(input);
      return findFirstVariantOptionOrThrow;
    }),
  findManyVariantOption: protectedProcedure
    .input(VariantOptionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyVariantOption = await ctx.prisma.variantOption.findMany(
        input
      );
      return findManyVariantOption;
    }),
  findUniqueVariantOption: protectedProcedure
    .input(VariantOptionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVariantOption = await ctx.prisma.variantOption.findUnique(
        input
      );
      return findUniqueVariantOption;
    }),
  findUniqueVariantOptionOrThrow: protectedProcedure
    .input(VariantOptionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVariantOptionOrThrow =
        await ctx.prisma.variantOption.findUniqueOrThrow(input);
      return findUniqueVariantOptionOrThrow;
    }),
  groupByVariantOption: protectedProcedure
    .input(VariantOptionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByVariantOption = await ctx.prisma.variantOption.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByVariantOption;
    }),
  updateManyVariantOption: protectedProcedure
    .input(VariantOptionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyVariantOption = await ctx.prisma.variantOption.updateMany(
        input
      );
      return updateManyVariantOption;
    }),
  updateOneVariantOption: protectedProcedure
    .input(VariantOptionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneVariantOption = await ctx.prisma.variantOption.update(
        input
      );
      return updateOneVariantOption;
    }),
  upsertOneVariantOption: protectedProcedure
    .input(VariantOptionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneVariantOption = await ctx.prisma.variantOption.upsert(
        input
      );
      return upsertOneVariantOption;
    }),
});
