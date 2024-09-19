import { Comment, Post, User } from "@prisma/client";

export type PostType = Post & {
  user: User;
} & {
  likes: [{ userId: string }];
} & {
  _count: {
    comments: number;
  };
};

export type CommentType = Comment & {
  user: Omit<
    User,
    "cover" | "city" | "description" | "website" | "work" | "school"
  >;
};
