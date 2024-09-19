"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData, img: string | undefined) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not authenticated!");
  }

  const desc = formData.get("desc") as string;

  const Desc = z.string().min(1).max(255);

  const validateDesc = Desc.safeParse(desc);

  if (!validateDesc.success) {
    console.log(validateDesc.error.flatten().fieldErrors);
    return;
  }

  try {
    await prisma.post.create({
      data: {
        desc: validateDesc?.data,
        img,
        userId,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Something went wrong!");
  }
};

export const deletePost = async (postId: number) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not authenticated!");
  }

  try {
    await prisma.post.delete({
      where: {
        id: postId,
        userId,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Something went wrong!");
  }
};

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
