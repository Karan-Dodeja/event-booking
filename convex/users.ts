import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const updateUser = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string()
    },
    handler: async (ctx, { userId, name, email }) => {
        // check if user exists
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_user_id", (q) => q.eq("userId", userId))
            .first();

        if (existingUser) {
            await ctx.db.patch(existingUser._id, {
                name,
                email,
            });
            return existingUser._id;
        }

        // Create new User
        const createNewUser = await ctx.db.insert("users", {
            userId,
            name,
            email
        });


        return createNewUser;

    }

})