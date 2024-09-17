"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "../client";

export const updateProfile = async (
  prevState: { success: Boolean; error: Boolean },
  payload: { formData: FormData; cover: string }
) => {
  const { userId } = auth();

  if (!userId) {
    return { success: false, error: true };
  }
  const { formData, cover } = payload;

  const fields = Object.fromEntries(formData);

  const filteredfilds = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surename: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    city: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validateFields = Profile.safeParse({ cover, ...filteredfilds });

  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: validateFields.data,
    });
    revalidatePath(`/`);
    return { success: true, error: false };
  } catch (error) {
    console.log("error: ", error);
    return { success: false, error: true };
  }
};
