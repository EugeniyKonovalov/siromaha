"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const switchLikes = async (postId: number) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });

    const action = existingLike
      ? prisma.like.delete({
          where: {
            id: existingLike.id,
          },
        })
      : prisma.like.create({
          data: {
            postId,
            userId,
          },
        });

    await action;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Something went wrong!");
  }
};
