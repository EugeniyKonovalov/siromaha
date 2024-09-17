"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    const action = existingBlock
      ? prisma.block.delete({ where: { id: existingBlock.id } })
      : prisma.block.create({
          data: { blockerId: currentUserId, blockedId: userId },
        });

    await action;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
