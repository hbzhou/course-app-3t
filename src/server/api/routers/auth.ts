import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  callback: publicProcedure.query(() => {
    return "receiving callback from github";
  }),
});
