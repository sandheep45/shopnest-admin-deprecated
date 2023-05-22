import { t, protectedProcedure } from "./helpers/createRouter";
import { MediaAggregateSchema } from "../schemas/aggregateMedia.schema";
import { MediaCreateManySchema } from "../schemas/createManyMedia.schema";
import { MediaCreateOneSchema } from "../schemas/createOneMedia.schema";
import { MediaDeleteManySchema } from "../schemas/deleteManyMedia.schema";
import { MediaDeleteOneSchema } from "../schemas/deleteOneMedia.schema";
import { MediaFindFirstSchema } from "../schemas/findFirstMedia.schema";
import { MediaFindManySchema } from "../schemas/findManyMedia.schema";
import { MediaFindUniqueSchema } from "../schemas/findUniqueMedia.schema";
import { MediaGroupBySchema } from "../schemas/groupByMedia.schema";
import { MediaUpdateManySchema } from "../schemas/updateManyMedia.schema";
import { MediaUpdateOneSchema } from "../schemas/updateOneMedia.schema";
import { MediaUpsertSchema } from "../schemas/upsertOneMedia.schema";

export const mediaRouter = t.router({
  aggregateMedia: protectedProcedure
    .input(MediaAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMedia = await ctx.prisma.media.aggregate(input);
      return aggregateMedia;
    }),
  createManyMedia: protectedProcedure
    .input(MediaCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyMedia = await ctx.prisma.media.createMany(input);
      return createManyMedia;
    }),
  createOneMedia: protectedProcedure
    .input(MediaCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneMedia = await ctx.prisma.media.create(input);
      return createOneMedia;
    }),
  deleteManyMedia: protectedProcedure
    .input(MediaDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyMedia = await ctx.prisma.media.deleteMany(input);
      return deleteManyMedia;
    }),
  deleteOneMedia: protectedProcedure
    .input(MediaDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneMedia = await ctx.prisma.media.delete(input);
      return deleteOneMedia;
    }),
  findFirstMedia: protectedProcedure
    .input(MediaFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMedia = await ctx.prisma.media.findFirst(input);
      return findFirstMedia;
    }),
  findFirstMediaOrThrow: protectedProcedure
    .input(MediaFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMediaOrThrow = await ctx.prisma.media.findFirstOrThrow(
        input
      );
      return findFirstMediaOrThrow;
    }),
  findManyMedia: protectedProcedure
    .input(MediaFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyMedia = await ctx.prisma.media.findMany(input);
      return findManyMedia;
    }),
  findUniqueMedia: protectedProcedure
    .input(MediaFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMedia = await ctx.prisma.media.findUnique(input);
      return findUniqueMedia;
    }),
  findUniqueMediaOrThrow: protectedProcedure
    .input(MediaFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMediaOrThrow = await ctx.prisma.media.findUniqueOrThrow(
        input
      );
      return findUniqueMediaOrThrow;
    }),
  groupByMedia: protectedProcedure
    .input(MediaGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByMedia = await ctx.prisma.media.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByMedia;
    }),
  updateManyMedia: protectedProcedure
    .input(MediaUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyMedia = await ctx.prisma.media.updateMany(input);
      return updateManyMedia;
    }),
  updateOneMedia: protectedProcedure
    .input(MediaUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneMedia = await ctx.prisma.media.update(input);
      return updateOneMedia;
    }),
  upsertOneMedia: protectedProcedure
    .input(MediaUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneMedia = await ctx.prisma.media.upsert(input);
      return upsertOneMedia;
    }),
});
