import { Follow, User } from "@prisma/client";

export type UserTypes = User & {
  _count: {
    followers: number;
    following: number;
    posts: number;
  };
};

export type UserFriendRequest = Follow & { sender: User };
