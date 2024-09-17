"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const existingFollower = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollower) {
      await prisma.follower.delete({
        where: {
          id: existingFollower?.id,
        },
      });
      return;
    }

    const existingFollow = await prisma.follow.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: userId,
      },
    });

    const action = existingFollow
      ? prisma.follow.delete({ where: { id: existingFollow.id } })
      : prisma.follow.create({
          data: { senderId: currentUserId, receiverId: userId },
        });

    await action;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const followRequest = async (
  userId: string,
  type?: "accept" | "decline"
) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }
  try {
    const existingFollowReq = await prisma.follow.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowReq) {
      await prisma.follow.delete({
        where: {
          id: existingFollowReq?.id,
        },
      });

      type === "accept" &&
        (await prisma.follower.create({
          data: { followerId: userId, followingId: currentUserId },
        }));
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
