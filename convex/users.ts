import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    createdAt: v.number(),
    name: v.string(),
    profileImage: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const newUser = await ctx.db.insert("users", {
        userId: args.userId,
        email: args.email,
        name: args.name,
        profileImage: args.profileImage,
        createdAt: args.createdAt,
      });

      return newUser;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  },
});

const readUser = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const userInfo = await ctx.db
        .query("users")
        .filter((user) => {
          return user.eq(user.field("userId"), args.userId);
        })
        .first();

      return userInfo;
    } catch (error) {
      throw new Error(`Error reading user: ${error}`);
    }
  },
});
