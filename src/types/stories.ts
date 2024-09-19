import { Story, User } from "@prisma/client";

export type StoriesType = Story & {
  user: Omit<
    User,
    "cover" | "city" | "description" | "website" | "work" | "school"
  >;
};
